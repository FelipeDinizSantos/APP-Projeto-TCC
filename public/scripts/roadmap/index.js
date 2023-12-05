let currentIndexContent = 1;
let savedInformation = 
{
    favorite: {},
    progress: {}
};

let contentsInformations = 
{
    stepOne:
    {
        principalTitle: 'Fundamentos',
        generalTitle: 'Linguagens de Marcação, Programação e Estilo',
        contentsTitles: ['HTML', 'CSS', 'JAVASCRIPT'],
        descriptions: ['Semântica HTML', 'Flexbox e Grid', 'Manipulação do DOM com JavaScript'],
        texts: 
        [
            'Entender a semântica HTML significa utilizar as tags mencionadas para representar corretamente o conteúdo. Por exemplo, use <header>para cabeçalhos, <nav>para menus de navegação e <footer>para rodapés. Isso não só melhora a acessibilidade, mas também facilita a interpretação dos motores de busca.',
            'Flexbox e Grid são técnicas avançadas de layout em CSS. Flexbox é usado para organizar elementos em uma única dimensão (linha ou coluna), enquanto Grid permite um layout bidimensional. Compreender essas ferramentas facilita a criação de designs responsivos e flexíveis.',
            'O DOM (Modelo de Objeto de Documento) representa a estrutura de uma página web. JavaScript é usado para manipular dinamicamente o DOM, respondendo a eventos do usuário, como cliques e movimentos do mouse. Isso é essencial para criar interatividade em aplicações web.'
        ]
    },
    stepTwo:
    {
        principalTitle: 'Avançando em Javascript',
        generalTitle: 'Escolha do Framework Front-end',
        contentsTitles: ['React, Angular e Vue.js', 'Bibliotecas Facilitadoras', 'Otimização com Bibliotecas'],
        descriptions: ['Frameworks', 'Bibliotecas', 'Complementos'],
        texts:
        [
            'Frameworks como React, Angular e Vue.js simplificam o desenvolvimento front-end ao oferecer estruturas organizadas e reutilizáveis. React é fechado pelo Facebook, Angular pelo Google, e Vue.js é uma opção mais leve. Escolha o que melhor se alinha com suas preferências e necessidades do projeto.',
            'Além dos frameworks, bibliotecas como React Router (para navegação em aplicações React) e Vuex (gerenciamento de estado para Vue.js) podem ser incorporadas para otimizar tarefas comuns, economizando tempo e melhorando a manutenibilidade do código.',
            'Além dos frameworks, incorporar bibliotecas como React Router (para navegação em aplicações React) e Vuex (gerenciamento de estado para Vue.js) pode otimizar tarefas comuns, economizando tempo e aprimorando a manutenibilidade do código.'
        ]
    },
    stepThree:
    {
        principalTitle: 'Automatizando o Desenvolvimento',
        generalTitle: 'Ferramentas de Automação',
        contentsTitles: ['Webpack', 'Babel', 'Git'],
        descriptions: ['Automatização e Otimização de Recursos Web', 'Transpilador de Javascript', 'Versionador de Arquivos'],
        texts:
        [
            'Webpack é uma ferramenta de automação que empacota e otimiza recursos web, gerenciando dependências, agrupando arquivos e melhorando o desempenho da aplicação. Facilita o desenvolvimento ao proporcionar uma experiência eficiente.',
            'Babel, por sua vez, realiza a transpilação de código moderno para uma versão compatível com navegadores mais antigos. Isso permite utilizar as últimas funcionalidades do ECMAScript sem se preocupar com a compatibilidade, contribuindo para a manutenção da base de código.',
            'Git é um sistema de controle de versão crucial para rastrear alterações no código, tornando o trabalho colaborativo mais eficiente. Possui recursos de ramificação que facilitam o desenvolvimento paralelo e a gestão de versões, sendo essencial para projetos com múltiplos colaboradores.'
        ]
    },
    stepFour:
    {
        principalTitle: 'Colocando a Mão na Massa!',
        generalTitle: 'Projeto Prático',
        contentsTitles: ['Desenvolvimento Real', 'Contribuição em Projetos de Código Aberto', 'Aprendizado Colaborativo'],
        descriptions: ['Consolidação e Desafios', 'Experiência Prática', 'Desenvolvimento no Mundo Real'],
        texts:
        [
            'Aplicar os conhecimentos em projetos reais é crucial. Isso não apenas consolida uma compreensão teórica, mas também expõe os desafios do mundo real.',
            'Contribuir para projetos de código aberto no GitHub é uma maneira excelente de ganhar experiência prática e colaborar com outros desenvolvedores.',
            'Engajar-se em projetos reais e participar de comunidades de código aberto proporciona uma perspectiva valiosa, permitindo aprendizado colaborativo e aprimoramento contínuo das habilidades de desenvolvimento.'
        ]
    },
    stepFive:
    {
        principalTitle: 'Aprofundamento',
        generalTitle: 'Desenvolvimento Front-End Avançado',
        contentsTitles: ['Exploração Avançada', 'Participação em Comunidades Especializadas', 'Atualização Contínua'],
        descriptions: ['Tendências e Inovações Front-end', 'Acesso às Últimas Novidades', 'O Caminho para a Excelência'],
        texts:
        [
            'Manter-se atualizado com as tendências do front-end é essencial para qualquer desenvolvedor. Conceitos avançados, como Server-Side Rendering (SSR), são fundamentais para otimizar o desempenho das aplicações. Além disso, Progressive Web Apps (PWAs) oferecem uma experiência de usuário semelhante à de aplicativos nativos.',
            'Acompanhar as últimas novidades do front-end pode ser realizado participando de conferências, webinars e blogs especializados. Essa interação em comunidades especializadas proporciona uma compreensão mais profunda e prática das inovações no desenvolvimento web.',
            'Manter uma postura de aprendizado contínuo é crucial. A participação ativa em eventos e a exploração de conceitos avançados garantem que os desenvolvedores estejam sempre à frente, preparados para enfrentar os desafios dinâmicos do desenvolvimento front-end.'
        ]
    }
}

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
    altereProgress(started, situations[0], '/assets/circlePink.svg');    
    situations[0].innerHTML = started;

    altereProgress(inProgress, situations[1], '/assets/circleOrange.svg');    
    situations[1].innerHTML = inProgress;


    altereProgress(finished, situations[2], '/assets/circleGreen.svg');    
    situations[2].innerHTML = finished;

    const totalBox = document.querySelector('.favoriteQtd');
    let total = 0;

    for(props in savedInformation.favorite)
    {
        if(savedInformation.favorite[props] === true)
        {
            total++;
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
    if(event.target.classList.contains('optionsFavorite') || event.target.classList.contains('favoriteImageList') || event.target.classList.contains('favoriteTextList'));
    {
        var ulElement = document.querySelector('.optionsFavorite ul');

        if (ulElement.children.length > 0) 
        {
            let indexContent = parseInt(event.target.getAttribute("aria-label"));
        
            if(!indexContent) indexContent = parseInt(event.target.parentNode.getAttribute("aria-label"));
            const contents = document.querySelectorAll('.contentContainer');
            
            const content =  contents[indexContent].querySelector('.titleInformation');
            content.click();
        }
    }
})

document.querySelector('body').addEventListener('click', (event)=>
{
    if(event.target.classList.contains('loginRequire'))
    {
        let overlay = document.querySelector('.overlay');
        document.querySelector('body').classList.add('hiddenScroll');
        overlay.style.display='block';
        document.querySelector('.loginRequireContainer').classList.add('show');
    }

    if(event.target.classList.contains('closeLoginBtn'))
    {
        let overlay = document.querySelector('.overlay');
        document.querySelector('body').classList.remove('hiddenScroll')
        overlay.style.display='none';
        document.querySelector('.loginRequireContainer').classList.remove('show');
    }
})

function updateRoadmap(step)
{
    let principalTitle = contentsInformations[step].principalTitle;
    let generalTitle = contentsInformations[step].generalTitle;
    let contentsTitles = contentsInformations[step].contentsTitles;
    let descriptions = contentsInformations[step].descriptions;
    let texts = contentsInformations[step].texts;

    document.querySelector('.descriptionRoadmap h1').innerText = principalTitle;
    document.querySelector('.principalTitle h1').innerText = generalTitle;

    document.querySelectorAll('.contentContainer').forEach((content, index) => 
    {
        content.querySelector('.titleInformation').innerText = contentsTitles[index];
        content.querySelector('.descriptionInformation span').innerText = descriptions[index];
        content.querySelector('.information').setAttribute('aria-label', texts[index]);
    })
}

document.querySelector('main').addEventListener('click', (event) => 
{
    if(event.target.classList.contains('stepTwo'))
    {
        document.querySelector('img[alt="importantStep"]').style.marginTop=-3+'vh';
        document.querySelectorAll('.line')[1].style.paddingBottom=135+'vh';
        document.querySelectorAll('.titleInformation').forEach((title, index) =>
        {
            if(index == 1)
            {
                title.style.marginTop=-2.2+'vh'
            }
            else
            {
                title.style.marginTop=-2.5+'vh'
            }
        });
        updateRoadmap('stepTwo')
    }

    if(event.target.classList.contains('stepOne'))
    {
        document.querySelector('img[alt="importantStep"]').style.marginTop=-1.5+'vh';
        document.querySelectorAll('.line')[1].style.paddingBottom=130+'vh';
        updateRoadmap('stepOne')
        document.querySelectorAll('.titleInformation').forEach((title, index) =>
        {
            if(index == 1)
            {
                title.style.marginTop=-.5+'vh'
            }
            else
            {
                title.style.marginTop=-1+'vh'
            }
        });        
    }

    if(event.target.classList.contains('stepThree'))
    {
        document.querySelector('img[alt="importantStep"]').style.marginTop=-1.5+'vh';
        document.querySelectorAll('.titleInformation').forEach((title, index) =>
        {
            title.style.marginTop=-.6+'vh'
        });
        document.querySelectorAll('.line')[1].style.paddingBottom=140+'vh';
        updateRoadmap('stepThree')
    }

    if(event.target.classList.contains('stepFour'))
    {
        document.querySelector('img[alt="importantStep"]').style.marginTop=-3.5+'vh';
        document.querySelectorAll('.line')[1].style.paddingBottom=150+'vh';
        document.querySelectorAll('.titleInformation').forEach((title, index) =>
        {
            if(index == 1)
            {
                title.style.marginTop=-4+'vh'
            }
            else
            {
                title.style.marginTop=-2.2+'vh'
            }
        });
        updateRoadmap('stepFour')
    }
    
    if(event.target.classList.contains('stepFive'))
    {
        document.querySelector('img[alt="importantStep"]').style.marginTop=-3+'vh';
        document.querySelectorAll('.line')[1].style.paddingBottom=160+'vh';
        document.querySelectorAll('.titleInformation').forEach((title, index) =>
            {
                if(index == 1)
                {
                    title.style.marginTop=-5+'vh'
                }
                else
                {
                    title.style.marginTop=-2.5+'vh'
                }
            });
        updateRoadmap('stepFive')
    }

    if(event.target.classList.contains('favoriteButton') || event.target.classList.contains('favoriteIcon'))
    {
        let button = document.querySelector('.favoriteIcon');
        let total = 0;

        for(props in savedInformation.favorite)
        {
            if(savedInformation.favorite[props] === true)
            {
                total++;
            }
        }

        button.classList.toggle('true');

        if(button.classList.contains('true'))
        {
            document.querySelector('.favoritesContainer').style.display = 'flex';
            if(total > 0)
            {
                button.src = '/assets/favoriteContent.svg';
            }
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

    if(event.target.classList.contains('titleInformation') || event.target.classList.contains('descriptionInformation') || event.target.classList.contains('spanDescription'))
    {
        if(event.target.classList.contains('spanDescription'))
        {
            document.querySelector('body').classList.add('hiddenScroll');
            const contents = document.querySelectorAll('.contentContainer');
            const index = Array.from(contents).indexOf(event.target.parentNode.parentNode.parentNode);
            currentIndexContent = index; 
        
            setProgress(currentIndexContent);
            setFavorite(currentIndexContent);

            let lateralMenu = document.querySelector('.lateralMenu');
            let overlay = document.querySelector('.overlay');
            let main = document.querySelector('main');

            clickedContent = event.target.parentNode.parentNode.parentNode;

            lateralMenu.classList.add('show');
            overlay.style.display='block';
            main.classList.add('menuActive');

            let contentTitle = event.target.parentNode.parentNode.parentNode.querySelector('.descriptionInformation').innerText;
            let contentText = event.target.parentNode.parentNode.getAttribute("aria-label");

            let title = document.querySelector('.lateralMenu .themeTitle span');
            let text = document.querySelector('.lateralMenu .themeText');

            text.innerText = contentText;
            title.innerText = contentTitle;
        }
        else
        {
            document.querySelector('body').classList.add('hiddenScroll');
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
    }
});

document.querySelector('.lateralMenu').addEventListener('click', (event)=>
{
    if(event.target.classList.contains('closeLateralMenuBtn'))
    {
        document.querySelector('body').classList.remove('hiddenScroll');
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

