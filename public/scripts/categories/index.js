const arrowBtn = document.querySelector('.openOptions');
const optionContainer = document.querySelector('.container .options');
const roadmaps = document.querySelectorAll('.roadmapsContainer p');
const optionsOfContainer = document.querySelectorAll('.options p');

arrowBtn.addEventListener('click', ()=>
{
    optionContainer.classList.toggle('show');
})

optionsOfContainer.forEach(element => {
    element.addEventListener('click', (event) => {
        let previousImage = document.querySelector('.categoryTitle img').src;
        let previousTitle = document.querySelector('.categoryTitle .title').textContent;

        document.querySelector('.categoryTitle .title').textContent = event.target.textContent;
        document.querySelector('.categoryTitle img').src = event.target.parentNode.querySelector('img').src;

        event.target.textContent = previousTitle;
        event.target.parentNode.querySelector('img').src = previousImage;
    });
});


optionsOfContainer[0].addEventListener('click', ()=>
{
    roadmaps[0].innerHTML = "Habilidades de Comunicação";
    roadmaps[1].innerHTML = "Educação Financeira";
    roadmaps[2].innerHTML = "Habilidades Sociais e Colaboração";
    roadmaps[3].innerHTML = "Autonomia e Autogestão";
})

optionsOfContainer[1].addEventListener('click', ()=>
{
    roadmaps[0].innerHTML = "Design Gráfico";
    roadmaps[1].innerHTML = "Animação Digital";
    roadmaps[2].innerHTML = "UX/UI Design";
    roadmaps[3].innerHTML = "Ilustração Digital";
})

optionsOfContainer[2].addEventListener('click', ()=>
{
    roadmaps[0].innerHTML = "Gestão Ambiental";
    roadmaps[1].innerHTML = "Energias Renováveis";
    roadmaps[2].innerHTML = "Conservação da Biodiversidade";
    roadmaps[3].innerHTML = "Desenvolvimento Sustentável";
})

optionsOfContainer[3].addEventListener('click', ()=>
{
    roadmaps[0].innerHTML = "Nutrição e Alimentação Saudável";
    roadmaps[1].innerHTML = "Mindfulness e Bem-Estar Mental";
    roadmaps[2].innerHTML = "Fitness e Exercícios Funcionais";
    roadmaps[3].innerHTML = "Medicina Preventivaigital";
})
