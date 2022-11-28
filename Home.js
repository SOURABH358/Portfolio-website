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
    if(educationSection.getBoundingClientRect().top<600){
        educationSection.classList.add('slideDown');
    }
    else{
        educationSection.classList.remove('slideDown');
    }
})