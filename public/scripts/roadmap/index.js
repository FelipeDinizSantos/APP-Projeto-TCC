document.querySelector('main').addEventListener('click', (event) => 
{
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
        let lateralMenu = document.querySelector('.lateralMenu');
        let overlay = document.querySelector('.overlay');
        let main = document.querySelector('main');

        lateralMenu.classList.add('show');
        overlay.style.display='block';
        main.classList.add('menuActive');
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
})