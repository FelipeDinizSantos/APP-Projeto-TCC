const arrow = document.querySelector('.arrow');
const searchBar = document.querySelector('.searchBar');
const tags = document.querySelectorAll('.tag');
const clearBtn = document.querySelector('.clear')
const searchBtn = document.querySelector('.goButton');
const input = document.querySelector('.searchInput');

searchBar.addEventListener('click', ()=>
{
    input.value='';
})

tags.forEach(tag=>
    {
        tag.addEventListener('click', ()=>
        {
            tag.classList.toggle('checked');
        })
    })

clearBtn.addEventListener('click', ()=>
{
    tags.forEach(tag=>
        {
            if(tag.classList.contains('checked')) tag.classList.remove('checked');
        })
})

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