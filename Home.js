// const floatNavbar = document.querySelector('#float__navbar')
// const arrow = document.getElementById('arrow');
// floatNavbar.addEventListener('click',(e)=>{
//     if(e.currentTarget!== e.target){
//         Array.from(e.currentTarget.children).map(el=>el.classList.remove('active'))
//         e.target.classList.add('active')
//     }
// })

// arrow.addEventListener('click',(e)=>{
//     floatNavbar.classList.toggle('show')
// })
const close = document.getElementById('close')
const hamburger = document.getElementById('hamburger')
const navBar = document.getElementById('navbar__section')
const headerSection = document.getElementById('header__section')
const educationSection = document.getElementById('education__section')
const rootElement = document.querySelector(':root');


hamburger.addEventListener('click',()=>{
    navBar.classList.add('show')
})
close.addEventListener('click',()=>{
    navBar.classList.remove('show')
})

window.addEventListener('scroll',()=>{
    headerSection.classList.add('header__section__scroll')
    if(scrollY===0){
        headerSection.classList.remove('header__section__scroll')
    }
    if(educationSection.getBoundingClientRect().top<700){
        educationSection.classList.add('slideDown');
        document.getElementById('college__logo').classList.add('slideRight')
        document.getElementById('college__details').classList.add('slideLeft')
        document.getElementById('school__logo').classList.add('slideLeft')
        document.getElementById('school__details').classList.add('slideRight')
    }
    else{
        educationSection.classList.remove('slideDown');
        document.getElementById('college__logo').classList.remove('slideRight')
        document.getElementById('college__details').classList.remove('slideLeft')
        document.getElementById('school__logo').classList.remove('slideLeft')
        document.getElementById('school__details').classList.remove('slideRight')
    }
})

document.getElementById('right__slider').addEventListener('click',()=>{
    const root = getComputedStyle(rootElement)
    const i = parseInt(root.getPropertyValue('--i'));
    if(i>=-2)
    rootElement.style.setProperty('--i',`${i-1}`);
})
document.getElementById('left__slider').addEventListener('click',()=>{
    const root = getComputedStyle(rootElement)
    const i = parseInt(root.getPropertyValue('--i'));
    if (i<0)
    rootElement.style.setProperty('--i',`${i+1}`);
})