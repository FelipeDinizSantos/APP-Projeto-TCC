document.querySelector('main').addEventListener('click', (event) => 
{
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

    // if(event.target.classList.contains('favoriteButton') || event.target.closest('.favoriteButton'))
    // {
    //     let imageHearth = document.querySelector('.favoriteIcon');
    //     if(imageHearth.classList.contains('favorite'))
    //     {
    //         imageHearth.src='/assets/unFavoriteContent.svg';
    //     }
    //     else
    //     {
    //         imageHearth.src = '/assets/favoriteContent.svg';
    //     }
    //     imageHearth.classList.toggle('favorite');
    // }

    if(event.target.classList.contains('false') || event.target.classList.contains('true'))
    {
        let image = event.target;

        if(image.classList.contains('false'))
        {
            image.classList.remove('false');
            image.classList.add('true');
            image.src = '/assets/concludedTrue.png';
        }
        else
        {
            image.classList.remove('true');
            image.classList.add('false');
            image.src = '/assets/concludedFalse.png';
        }
    }

    if(event.target.classList.contains('titleInformation') || event.target.classList.contains('descriptionInformation'))
    {
        const contents = document.querySelectorAll('.contentContainer');

        let lateralMenu = document.querySelector('.lateralMenu');
        let overlay = document.querySelector('.overlay');
        let main = document.querySelector('main');

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
    }

    if(event.target.classList.contains('favorite'))
    {
        event.target.classList.toggle('true');

        if(event.target.classList.contains('true'))
        {
            event.target.src="/assets/favoriteContent.svg"
        }
        else
        {
            event.target.src="/assets/unFavoriteContent.svg";
        }
    }
})