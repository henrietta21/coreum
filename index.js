const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav")


hamburger.addEventListener("click", ()=> {
    nav.classList.toggle("show")
})


const question = document.querySelectorAll(".question")
const dropDown = document.querySelectorAll(".dropdown")

question.forEach((question)=> question.addEventListener("click", ()=> {
    if(!question.classList.contains("open")) {
        question.classList.toggle("open");
        question.parentNode.classList.toggle("open");
        question.nextElementSibling.classList.toggle("open");
    }
    else{
        question.classList.remove("open");
        question.parentNode.classList.remove("open");
        question.nextElementSibling.classList.remove("open");
    }
}))