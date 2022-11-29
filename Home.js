const close = document.getElementById('close')
const hamburger = document.getElementById('hamburger')
const navBar = document.getElementById('navbar__section')
const headerSection = document.getElementById('header__section')
const educationSection = document.getElementById('education__section')
const rootElement = document.querySelector(':root');
const projectContainer = document.getElementById('project__container');
const projects = [{
    title: "Netflix Clone",
    description: "A fully responsive Netflix clone, created using ReactJs. For navigation inside the website I have used React router. The entire website is styled using CSS and Material UI. The project is hosted on netlify and developed using create react app.",
    techstack: ["ReactJs, CSS, Material UI, React Router"],
    image: "./assets/project/netflix_clone.jpg",
    github: "https://github.com/SOURABH358/netflix-clone",
    live: "https://animated-gaufre-45ae75.netlify.app/"
},
]

hamburger.addEventListener('click', () => {
    navBar.classList.add('show')
})
close.addEventListener('click', () => {
    navBar.classList.remove('show')
})

window.addEventListener('scroll', () => {
    headerSection.classList.add('header__section__scroll')
    if (scrollY === 0) {
        headerSection.classList.remove('header__section__scroll')
    }
    if (educationSection.getBoundingClientRect().top < 700) {
        educationSection.classList.add('slideDown');
        document.getElementById('college__logo').classList.add('slideRight')
        document.getElementById('college__details').classList.add('slideLeft')
        document.getElementById('school__logo').classList.add('slideLeft')
        document.getElementById('school__details').classList.add('slideRight')
    }
    else {
        educationSection.classList.remove('slideDown');
        document.getElementById('college__logo').classList.remove('slideRight')
        document.getElementById('college__details').classList.remove('slideLeft')
        document.getElementById('school__logo').classList.remove('slideLeft')
        document.getElementById('school__details').classList.remove('slideRight')
    }
})

document.getElementById('right__slider').addEventListener('click', () => {
    const root = getComputedStyle(rootElement)
    const i = parseInt(root.getPropertyValue('--i'));
    if (i >= -2)
        rootElement.style.setProperty('--i', `${i - 1}`);
})
document.getElementById('left__slider').addEventListener('click', () => {
    const root = getComputedStyle(rootElement)
    const i = parseInt(root.getPropertyValue('--i'));
    if (i < 0)
        rootElement.style.setProperty('--i', `${i + 1}`);
})

function createProjects() {
    projectContainer.innerHTML = projects.map(project => {
        return `<div class="project">
        <div class="project__hero">
            <img src=${project.image} />
        </div>
        <div class="project__details">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class = "project__links">
                <a href = ${project.github}>Github</a>
                <a href = ${project.live}>Check Live</a>
            </div>
            <div class="techstack">
                ${project.techstack.map(tech=>`<p>${tech}</p>`)}
            </div>
        </div>
    </div>`
    })
}

createProjects();