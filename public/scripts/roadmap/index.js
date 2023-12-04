let currentIndexContent = 1;
let savedInformation = 
{
    favorite: {},
    progress: {}
};

window.addEventListener('load', ()=>
{
    document.querySelector('.totalContents').innerText = document.querySelectorAll('.contentContainer').length;
})

function updateProgress()
{
    const situations = document.querySelectorAll('.percentage');
    const contents = document.querySelectorAll('.contentContainer');
    let started = 0;
    let inProgress = 0;
    let finished = 0;

    for(prop in savedInformation.progress)
    {
        let progress = savedInformation.progress[prop];

        switch((progress.replace(/\s/g, '')))
        {
            case 'Inicio':
                started++;
                break;
            case 'Andamento':
                inProgress++;
                break;
            case 'Finalizado':
                finished++;
                break;
            default:
                console.log('ermac');
        }
    }

    function altereProgress(value, element, img)
    {
        if(value != 0)
        {
            element.style.color="#636560";
            element.parentNode.querySelector('span img').src = img;
        }
        else
        {
            element.style.color="#DCDCDC";
            element.parentNode.querySelector('span img').src = '/assets/circleNotStarted.svg';
        }
    }

    started = ((started / contents.length) * 100).toFixed(0);
    altereProgress(started, situations[0], '/assets/circlePink.svg');    
    situations[0].innerHTML = started + '%';

    inProgress = ((inProgress / contents.length) * 100).toFixed(0);
    altereProgress(inProgress, situations[1], '/assets/circleOrange.svg');    
    situations[1].innerHTML = inProgress + '%';

    finished = ((finished / contents.length) * 100).toFixed(0);
    altereProgress(finished, situations[2], '/assets/circleGreen.svg');    
    situations[2].innerHTML = finished + '%';

    const favoriteContainer = document.querySelector('.favoritesContainer');
    const totalBox = document.querySelector('.favoriteQtd');
    let total = 0;

    for(props in savedInformation.favorite)
    {
        if(savedInformation.favorite[props] === true)
        {
            total++
        }
    }

    totalBox.innerText = 'Total: ' + total;

    const ulFavorite = document.querySelector('.optionsFavorite ul');
    ulFavorite.innerHTML = "";

    for (let props in savedInformation.favorite) 
    {
        if (savedInformation.favorite[props] === true) 
        {
            let li = document.createElement('li');
            let img = document.createElement('img');
            let span = document.createElement('span');
            let path = contents[props].querySelector('.titleInformation').innerText + ' > ' + contents[props].querySelector('.descriptionInformation').innerText;
            
            span.innerText = path;
            img.src = '/assets/circleNotStarted.svg';
            li.classList.add('optionFavorite');
            img.classList.add('favoriteImageList');
            span.classList.add('favoriteTextList');
            li.appendChild(img);
            li.appendChild(span);
    
            li.setAttribute('aria-label', props);
    
            ulFavorite.appendChild(li);
        }
    }
}

function setProgress(index)
{
    let state = document.querySelector('.state span');
    let stateImage = document.querySelector('.state img');
    let savedState = savedInformation.progress[index];
    let savedImage;

    if(savedState)
    {
        switch((savedState.replace(/\s/g, '')))
        {
            case 'Inicio':
                savedImage = '/assets/circlePink.svg';
                break;
            case 'Andamento':
                savedImage = '/assets/circleOrange.svg';
                break;
            case 'Finalizado': 
                savedImage = '/assets/circleGreen.svg';
                break;
            case 'Pendente':
                savedImage = '/assets/circleNotStarted.svg';
                break;
            default:
                savedImage = '/assets/circleNotStarted.svg';
        }

        state.innerText = savedState;
        stateImage.src = savedImage;
    }
    else
    {
        state.innerText = 'Pendente';
        stateImage.src = '/assets/circleNotStarted.svg';
    }
    updateProgress();
}

function setFavorite(index)
{
    let favoriteButton = document.querySelector('.themeTitle .favorite');
    let savedFavorite = savedInformation.favorite[index];

    if(savedFavorite)
    {
        favoriteButton.classList.add('true');
        favoriteButton.src = '/assets/favoriteContent.svg';
    }
    else
    {
        if(favoriteButton.classList.contains('true'))
        {
            favoriteButton.classList.remove('true');
        }
        favoriteButton.src = '/assets/unFavoriteContent.svg';
    }
    updateProgress();
}

document.querySelector('.progress').addEventListener('click', (event)=>
{
    if(event.target.classList.contains('optionFavorite') || event.target.classList.contains('favoriteImageList') || event.target.classList.contains('favoriteTextList'));
    {
        let indexContent = parseInt(event.target.getAttribute("aria-label"));
        if(!indexContent) indexContent = parseInt(event.target.parentNode.getAttribute("aria-label"));
        const contents = document.querySelectorAll('.contentContainer');
        
        contents[indexContent].querySelector('.titleInformation').click();
    }
})

document.querySelector('main').addEventListener('click', (event) => 
{
    if(event.target.classList.contains('favoriteButton') || event.target.classList.contains('favoriteIcon'))
    {
        let button = document.querySelector('.favoriteIcon');

        button.classList.toggle('true');

        if(button.classList.contains('true'))
        {
            document.querySelector('.favoritesContainer').style.display = 'flex';
            button.src = '/assets/favoriteContent.svg';
        }
        else
        {
            document.querySelector('.favoritesContainer').style.display = 'none';
            button.src = '/assets/unFavoriteContent.svg';
        }
    }

    if(event.target.classList.contains('flag'))
    {
        if(event.target.classList.contains('active'))
        {
            event.target.src = '/assets/flagPath.svg';
        }
        else
        {
            event.target.src = '/assets/flagPathActive.svg';
        }

        event.target.classList.toggle('active');
    }

    if (event.target.classList.contains('item'))
    {
        const items = document.querySelectorAll(".item");
        let clickedItem = event.target;
        let previousImage = items[2].src;
        items[2].src = clickedItem.src;
        clickedItem.src = previousImage;
    }

    if(event.target.classList.contains('concludeFalse') || event.target.classList.contains('concludeTrue'))
    {
        let image = event.target;

        if(image.classList.contains('concludeFalse'))
        {
            image.classList.remove('concludeFalse');
            image.classList.add('concludeTrue');
            image.src = '/assets/concludedTrue.png';
        }
        else
        {
            image.classList.remove('concludeTrue');
            image.classList.add('concludeFalse');
            image.src = '/assets/concludedFalse.png';
        }
    }

    if(event.target.classList.contains('titleInformation') || event.target.classList.contains('descriptionInformation'))
    {
        const contents = document.querySelectorAll('.contentContainer');
        const index = Array.from(contents).indexOf(event.target.parentNode.parentNode);
        currentIndexContent = index; 
       
        setProgress(currentIndexContent);
        setFavorite(currentIndexContent);

        let lateralMenu = document.querySelector('.lateralMenu');
        let overlay = document.querySelector('.overlay');
        let main = document.querySelector('main');

        clickedContent = event.target.parentNode;

        lateralMenu.classList.add('show');
        overlay.style.display='block';
        main.classList.add('menuActive');

        let contentTitle = event.target.parentNode.querySelector('.descriptionInformation').innerText;
        let contentText = event.target.parentNode.getAttribute("aria-label");

        let title = document.querySelector('.lateralMenu .themeTitle span');
        let text = document.querySelector('.lateralMenu .themeText');

        text.innerText = contentText;
        title.innerText = contentTitle;
    }
});

document.querySelector('.lateralMenu').addEventListener('click', (event)=>
{
    if(event.target.classList.contains('closeLateralMenuBtn'))
    {
        let lateralMenu = document.querySelector('.lateralMenu');
        let overlay = document.querySelector('.overlay');
        let main = document.querySelector('main');
        lateralMenu.classList.remove('show');
        overlay.style.display='none';
        main.classList.remove('menuActive');
        setProgress(currentIndexContent);
        setFavorite(currentIndexContent);
    }

    if (event.target.classList.contains('openOptions')) {
        const arrowBtn = document.querySelector('.openOptions');
        const optionContainer = document.querySelector('.situation .options');

        optionContainer.classList.toggle('show');
        arrowBtn.classList.toggle('invert');
    }

    if(event.target.classList.contains('option'))
    {
        document.querySelector('.state span').innerText = event.target.innerText;
        document.querySelector('.state img').src = event.target.querySelector('img').src;
        const optionContainer = document.querySelector('.situation .options');
        const arrowBtn = document.querySelector('.openOptions');
        optionContainer.classList.remove('show');
        arrowBtn.classList.toggle('invert');

        savedInformation.progress[currentIndexContent] = event.target.innerText;
    }

    if(event.target.classList.contains('favorite'))
    {
        event.target.classList.toggle('true');

        if(event.target.classList.contains('true'))
        {
            event.target.src="/assets/favoriteContent.svg"
            savedInformation.favorite[currentIndexContent] = true; 
        }
        else
        {
            event.target.src="/assets/unFavoriteContent.svg";
            savedInformation.favorite[currentIndexContent] = false;
        }
    }

    function altereContent(index)
    {
        const contents = document.querySelectorAll('.contentContainer');
        const content = contents[index]; 

        let title = document.querySelector('.lateralMenu .themeTitle span');
        let text = document.querySelector('.lateralMenu .themeText');

        let contentText = content.querySelector('.information').getAttribute('aria-label');
        let contentTitle = content.querySelector('.descriptionInformation').innerText;

        setProgress(currentIndexContent);
        setFavorite(currentIndexContent);

        text.innerText = contentText;
        title.innerText = contentTitle;
    }

    if(event.target.classList.contains('go'))
    {
        const contents = document.querySelectorAll('.contentContainer').length;
        currentIndexContent++;

        if((currentIndexContent + 1) > contents)
        {
            currentIndexContent--;
            alert('Ultimo conteúdo')
        }
        else
        {
            altereContent(currentIndexContent);
        }
    }

    if(event.target.classList.contains('back'))
    {
        const contents = document.querySelectorAll('.contentContainer').length;
        currentIndexContent--;

        if(currentIndexContent < 0)
        {
            currentIndexContent++;
            alert('Primeiro conteúdo');
        }
        else
        {
            altereContent(currentIndexContent);
        }
    }
})