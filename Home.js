const close = document.getElementById('close')
const hamburger = document.getElementById('hamburger')
const navBar = document.getElementById('navbar__section')
const headerSection = document.getElementById('header__section')
const educationSection = document.getElementById('education__section')
const rootElement = document.querySelector(':root');
const projectContainer = document.getElementById('project__container');
const projectSection = document.getElementById('project__section');
const workSection = document.getElementById('work__section');
const projects = [{
    title: "Netflix Clone",
    description: "A fully responsive Netflix clone, created using ReactJs. For navigation inside the website I have used React router. The entire website is styled using CSS and Material UI. The project is hosted on netlify and developed using create react app.",
    techstack: ["ReactJs", "CSS","Material UI", "React Router"],
    image: "./assets/project/netflix_clone.jpg",
    github: "https://github.com/SOURABH358/netflix-clone",
    live: "https://animated-gaufre-45ae75.netlify.app/"
},
{
    title: "Crypto Dashboard",
    description: "A fully responsive Crypto Dashboard built using ReactJs, and Tailwind CSS. The project utilizes an API for data fetching, and displays it using charts.",
    techstack: ["ReactJs", "CSS","Tailwind CSS", "API"],
    image: "./assets/project/crypto-dashboard.jpg",
    github: "https://github.com/SOURABH358/netflix-clone",
    live: "https://animated-gaufre-45ae75.netlify.app/"
},
{
    title: "Netflix Clone",
    description: "A fully responsive Netflix clone, created using ReactJs. For navigation inside the website I have used React router. The entire website is styled using CSS and Material UI. The project is hosted on netlify and developed using create react app.",
    techstack: ["ReactJs", "CSS","Material UI", "React Router"],
    image: "./assets/project/netflix_clone.jpg",
    github: "https://github.com/SOURABH358/netflix-clone",
    live: "https://animated-gaufre-45ae75.netlify.app/"
},
{
    title: "Netflix Clone",
    description: "A fully responsive Netflix clone, created using ReactJs. For navigation inside the website I have used React router. The entire website is styled using CSS and Material UI. The project is hosted on netlify and developed using create react app.",
    techstack: ["ReactJs", "CSS","Material UI", "React Router"],
    image: "./assets/project/netflix_clone.jpg",
    github: "https://github.com/SOURABH358/netflix-clone",
    live: "https://animated-gaufre-45ae75.netlify.app/"
}
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
        document.querySelector('.education__title').classList.add('slideVerti')
        document.getElementById('college__logo').classList.add('slideHori')
        document.getElementById('college__details').classList.add('slideHori')
        document.getElementById('school__logo').classList.add('slideHori')
        document.getElementById('school__details').classList.add('slideHori')
    }
    else {
        document.querySelector('.education__title').classList.remove('slideVerti')
        document.getElementById('college__logo').classList.remove('slideHori')
        document.getElementById('college__details').classList.remove('slideHori')
        document.getElementById('school__logo').classList.remove('slideHori')
        document.getElementById('school__details').classList.remove('slideHori')
    }
    
    if(projectSection.getBoundingClientRect().top<700)
    {
        document.querySelector('.project__title').classList.add('slideVerti');
        document.querySelector('.work__details').classList.add('slideHori');
        document.querySelector('.company__logo').classList.add('slideHori');
    }
    else{
        document.querySelector('.project__title').classList.remove('slideVerti');
        document.querySelector('.company__logo').classList.remove('slideHori');
        document.querySelector('.work__details').classList.remove('slideHori');
    }
    if(workSection.getBoundingClientRect().top<1200)
    {
        document.querySelector('.company__logo').classList.add('slideHori');
        document.querySelector('.work__title').classList.add('slideVerti');
        document.querySelector('.work__details').classList.add('slideHori');
    }
    else{
        document.querySelector('.work__title').classList.remove('slideVerti');
        document.querySelector('.company__logo').classList.remove('slideHori');
        document.querySelector('.work__details').classList.remove('slideHori');
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
                <a target="_blank" href = ${project.github}>Github</a>
                <a target="_blank" href = ${project.live}>Check Live</a>
            </div>
            <div class="techstack">
                ${project.techstack.map(tech=>`<p>${tech}</p>`).join("")}
            </div>
        </div>
    </div>`
    })
}

createProjects();