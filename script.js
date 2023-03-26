
//mobile navigation menu functionality

const menuIcon=document.querySelector('.menu-icon')
const menu=document.querySelector('.header-menu')
menuIcon.addEventListener('click',()=>{
    menu.classList.toggle('hide-menu')
})


