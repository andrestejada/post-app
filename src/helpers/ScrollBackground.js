export const scroll =()=>{
    window.addEventListener('scroll',()=>{
        const nav = document.querySelector("nav");
        nav.classList.toggle("down",window.scrollY>0);
    })        
}

