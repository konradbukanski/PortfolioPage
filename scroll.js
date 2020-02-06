const explore = document.querySelector(".about__text button")

explore.addEventListener("click", () => {
    document.querySelector(".aboutme").scrollIntoView({
        behavior: 'smooth' 
    })
})

document.querySelector(".home").addEventListener("click", () => {
    document.querySelector(".about").scrollIntoView({
        behavior: 'smooth' 
    })
})
document.querySelector(".user").addEventListener("click", () => {
    document.querySelector(".aboutme").scrollIntoView({
        behavior: 'smooth' 
    })
})
document.querySelector(".skill").addEventListener("click", () => {
    document.querySelector(".skills").scrollIntoView({
        behavior: 'smooth' 
    })
})
document.querySelector(".project").addEventListener("click", () => {
    document.querySelector(".projects").scrollIntoView({
        behavior: 'smooth' 
    })
})
document.querySelector(".contactme").addEventListener("click", () => {
    document.querySelector(".contact").scrollIntoView({
        behavior: 'smooth' 
    })
})