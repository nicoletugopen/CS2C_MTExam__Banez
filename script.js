var typed = new typed(".text", {
    strings: ["Programmer" , "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
