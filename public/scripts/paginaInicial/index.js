const searchSection = document.querySelector('.box.searchBox');
const categoriesSection = document.querySelector('.box.categoryBox');

searchSection.addEventListener('click', ()=>
{
    window.location.assign('/pesquisa');
})

categoriesSection.addEventListener('click', ()=>
{
    window.location.assign('/categorias');
})