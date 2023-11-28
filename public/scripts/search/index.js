const arrow = document.querySelector('.arrow');
const searchBar = document.querySelector('.searchBar');

arrow.addEventListener('click', ()=>
{
    if(arrow.classList.contains('down'))
    {
        var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var scrollAmount = screenHeight * 0.49;
        window.scrollTo(0, scrollAmount);

        arrow.classList.remove('down');
        arrow.classList.add('up');
    }
    else
    {
        window.scrollTo(330, 0);
        arrow.classList.remove('up');
        arrow.classList.add('down');
    }

    searchBar.classList.toggle('principal');
})