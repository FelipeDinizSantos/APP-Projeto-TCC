const burgerButton = document.querySelector('.burgerButton');
const menu = document.getElementsByTagName('header')[0];
const menuList = document.querySelector('.menuOptions');

const home = document.querySelector('.home'),
notification = document.querySelector('.notification'),
community = document.querySelector('.community'),
aboutUs = document.querySelector('.aboutUs'),
support = document.querySelector('.support'),
settings = document.querySelector('.settings'),
theme = document.querySelector('.theme'),
userOption = document.querySelector('.userOption');

home.addEventListener('mouseover', ()=>
{
    home.firstElementChild.src = "/assets/home.svg";
});
home.addEventListener('mouseout', ()=>
{
    home.firstElementChild.src= "/assets/homeGray.svg";
})

notification.addEventListener('mouseover', ()=>
{
    notification.firstElementChild.src = "/assets/notification.png";
});
notification.addEventListener('mouseout', ()=>
{
    notification.firstElementChild.src= "/assets/notificationGray.png";
})

community.addEventListener('mouseover', ()=>
{
    community.firstElementChild.src = "/assets/community.png";
});
community.addEventListener('mouseout', ()=>
{
    community.firstElementChild.src= "/assets/communityGray.png";
})

aboutUs.addEventListener('mouseover', ()=>
{
    aboutUs.firstElementChild.src = "/assets/aboutUs.png";
});
aboutUs.addEventListener('mouseout', ()=>
{
    aboutUs.firstElementChild.src= "/assets/aboutUsGray.png";
})

support.addEventListener('mouseover', ()=>
{
    support.firstElementChild.src = "/assets/support.png";
});
support.addEventListener('mouseout', ()=>
{
    support.firstElementChild.src= "/assets/supportGray.png";
})

settings.addEventListener('mouseover', ()=>
{
    settings.firstElementChild.src = "/assets/setting.png";
});
settings.addEventListener('mouseout', ()=>
{
    settings.firstElementChild.src= "/assets/settingGray.png";
})

theme.addEventListener('mouseover', ()=>
{
    theme.firstElementChild.src = "/assets/theme.png";
});
theme.addEventListener('mouseout', ()=>
{
    theme.firstElementChild.src= "/assets/themeGray.png";
})

userOption.addEventListener('mouseover', ()=>
{
    userOption.firstElementChild.src = "/assets/logout.png";
});
userOption.addEventListener('mouseout', ()=>
{
    userOption.firstElementChild.src= "/assets/logoutGray.png";
})

menuList.addEventListener('mouseover', ()=>
{
    menu.classList.remove('showResume');
    menu.classList.add('showComplete');
})

menu.addEventListener('mouseout', ()=>
{
    if(menu.classList.contains('showComplete'))
    {
        menu.classList.remove('showComplete');
        menu.classList.add('showResume');
    }
})

burgerButton.addEventListener('click', () => {


    if(event.target.classList.contains('open') && !menu.classList.contains('show'))
    {
        burgerButton.classList.remove('open');
        burgerButton.classList.add('close');
        menu.classList.add('showResume');
    }
    else
    {
        burgerButton.classList.remove('close');
        burgerButton.classList.add('open');
        menu.classList.remove('showResume');

        if(menu.classList.contains('showComplete'))
        {
            menu.classList.remove('showComplete');
        }
    }

    if(burgerButton.classList.contains('open'))
    {
        burgerButton.src = '/assets/burger_open.svg';
    }
    else
    {
        burgerButton.src = '/assets/burger_close.svg';
    }
});

window.addEventListener('scroll', ()=>
{
    burgerButton.src = '/assets/burger_open.svg';

    burgerButton.classList.remove('close');
    burgerButton.classList.add('open');
    menu.classList.remove('showResume');

    if(menu.classList.contains('showComplete'))
    {
        menu.classList.remove('showComplete');
    }
})