const arrow = document.querySelector('.arrow');
const searchBar = document.querySelector('.searchBar');
const tags = document.querySelectorAll('.tag');
const tagContainer = document.querySelector('.tags');
const clearBtn = document.querySelector('.clear')
const searchBtn = document.querySelector('.goButton');
const input = document.querySelector('.searchInput');

window.addEventListener('scroll', ()=>
{
    const scrollTop = window.scrollY;
    const bannerHeight = document.querySelector('.banner').clientHeight

    if(scrollTop < bannerHeight)
    {
        tagContainer.classList.add('transparent');
        searchBar.classList.remove('principal');
        if(arrow.classList.contains('up'))
        {
            arrow.classList.remove('up');
        }
        searchBtn.classList.add('show');
        clearBtn.classList.remove('show');
        input.blur();
    }
    if (scrollTop > bannerHeight)
    {
        searchBar.classList.add('principal');
        if(!arrow.classList.contains('up'))
        {
            arrow.classList.add('up');
        }
        input.focus();
    } 
    if(scrollTop > 0)
    {
        tagContainer.classList.remove('transparent');
    }
})

searchBar.addEventListener('click', ()=>
{
    tagContainer.classList.remove('transparent');
    searchBar.classList.add('principal');
    var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var scrollAmount = screenHeight * 0.49;
    window.scrollTo(0, scrollAmount);
})

input.addEventListener('input', ()=>
{
    if (event.inputType === 'deleteContentBackward')
    {
        searchBtn.classList.remove('show');
        clearBtn.classList.add('show');
    }
    else
    {
        searchBtn.classList.add('show');
        clearBtn.classList.remove('show');
    }
})

searchBtn.addEventListener('click', ()=>
{
    input.value='';
    tags.forEach(tag=>
    {
        if(tag.classList.contains('checked')) tag.classList.remove('checked');
    })
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

    input.value = '';
    searchBtn.classList.add('show');
    clearBtn.classList.remove('show');
})

arrow.addEventListener('click', ()=>
{
    tagContainer.classList.remove('transparent');
    arrow.classList.remove('up');
    searchBar.classList.toggle('principal');

    searchBtn.classList.add('show');
    clearBtn.classList.remove('show');

    window.scrollTo(500, 0);
})