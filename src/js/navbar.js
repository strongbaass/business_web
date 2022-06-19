const navMenu = document.getElementById('bars');
const closebtn = document.getElementById('closebtn')
const navbuttons = document.getElementById('nav_buttons')

const showNav = ('click', () => {
    navbuttons.classList.add('test')
})
const closeNav = ('click' , () => {
    navbuttons.classList.remove('test')
})
if(navMenu){
    navMenu.addEventListener('click', showNav)
}   
if(closebtn){
    closebtn.addEventListener('click',  closeNav )
}

