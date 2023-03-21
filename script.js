//mobile navigation menu functionality
const menuIcon=document.querySelector('.menu-icon')
const menu=document.querySelector('.header-menu')
menuIcon.addEventListener('click',()=>{
    menu.classList.toggle('hide-menu')
})
//add css animations:
const hiddenSectionsRight=document.querySelectorAll('.hidden-right')
const observerRight=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove("show")
        }
    })
})
hiddenSectionsRight.forEach(section => observerRight.observe(section));

const hiddenSectionsLeft=document.querySelectorAll('.hidden-left')
const observerLeft=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove("show")
        }
    })
})
hiddenSectionsLeft.forEach(section => observerLeft.observe(section));