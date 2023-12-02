document.querySelector('.container').addEventListener('click', (event) => {
    const arrowBtn = document.querySelector('.openOptions');
    const optionContainer = document.querySelector('.container .options');
    const roadmaps = document.querySelectorAll('.roadmapsContainer p');
    const optionsOfContainer = document.querySelectorAll('.options p');

    if (event.target.classList.contains('openOptions')) {
        optionContainer.classList.toggle('show');
        arrowBtn.classList.toggle('invert');
    }

    if (event.target.classList.contains('titleOp')) {
        const previousImage = document.querySelector('.categoryTitle img').src;
        const previousTitle = document.querySelector('.categoryTitle .title').textContent;

        document.querySelector('.categoryTitle .title').textContent = event.target.textContent;
        document.querySelector('.categoryTitle img').src = event.target.parentNode.querySelector('img').src;

        event.target.textContent = previousTitle;
        event.target.parentNode.querySelector('img').src = previousImage;
    }

    if (event.target.classList.contains('titleOp')) {
        const index = Array.from(optionsOfContainer).indexOf(event.target.parentNode);
        switch (index) {
            case 0:
                setRoadmapsContent(["Habilidades de Comunicação", "Educação Financeira", "Habilidades Sociais e Colaboração", "Autonomia e Autogestão"]);
                break;
            case 1:
                setRoadmapsContent(["Design Gráfico", "Animação Digital", "UX/UI Design", "Ilustração Digital"]);
                break;
            case 2:
                setRoadmapsContent(["Gestão Ambiental", "Energias Renováveis", "Conservação da Biodiversidade", "Desenvolvimento Sustentável"]);
                break;
            case 3:
                setRoadmapsContent(["Nutrição e Alimentação Saudável", "Mindfulness e Bem-Estar Mental", "Fitness e Exercícios Funcionais", "Medicina Preventiva"]);
                break;
            default:
                break;
        }
    }
});

function setRoadmapsContent(contents) {
    const roadmaps = document.querySelectorAll('.roadmapsContainer p');
    contents.forEach((content, index) => {
        roadmaps[index].innerHTML = content;
    });
}
