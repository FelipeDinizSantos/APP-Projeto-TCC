const searchSection = document.querySelector('.box.searchBox');
const categoriesSection = document.querySelector('.box.categoryBox');
const createSection = document.querySelector('.box.addBox');

searchSection.addEventListener('click', ()=>
{
    window.location.assign('/pesquisa');
})

categoriesSection.addEventListener('click', ()=>
{
    window.location.assign('/categorias');
})

createSection.addEventListener('click', ()=>
{
    window.location.assign('/criar');
})