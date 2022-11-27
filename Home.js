const floatNavbar = document.querySelector('#float__navbar')
const arrow = document.getElementById('arrow');
floatNavbar.addEventListener('click',(e)=>{
    if(e.currentTarget!== e.target){
        Array.from(e.currentTarget.children).map(el=>el.classList.remove('active'))
        e.target.classList.add('active')
    }
})

arrow.addEventListener('click',(e)=>{
    floatNavbar.classList.toggle('show')
})