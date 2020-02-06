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


const aboutmeHeight = document.querySelector(".aboutme").offsetHeight
const skillsHeight = document.querySelector(".skills").offsetHeight
const projectsHeight = document.querySelector(".projects").offsetHeight
const contactHeight = document.querySelector(".contact").offsetHeight

activeSection ()

document.addEventListener("scroll", () => {
    activeSection ()
})

function activeSection () {
    let scroll = document.documentElement.scrollTop
    console.log()
    if( scroll <= aboutmeHeight-aboutmeHeight/2){
        document.querySelector(".home").style.color = "#f84545"
    }else{
        document.querySelector(".home").style.color = "#cccccc"
    }
    if( scroll < aboutmeHeight+skillsHeight - aboutmeHeight/2 && scroll > aboutmeHeight - aboutmeHeight/2){
        document.querySelector(".user").style.color = "#f84545"
    }else{
        document.querySelector(".user").style.color = "#cccccc"
    }
    if( scroll < aboutmeHeight+skillsHeight+projectsHeight - aboutmeHeight/2 && scroll > (aboutmeHeight + skillsHeight - aboutmeHeight/2)){
        document.querySelector(".skill").style.color = "#f84545"
    }else{
        document.querySelector(".skill").style.color = "#cccccc"
    }
    if( scroll < aboutmeHeight+skillsHeight+projectsHeight+contactHeight-aboutmeHeight/2 && scroll > (aboutmeHeight + skillsHeight + projectsHeight - aboutmeHeight/2)){
        document.querySelector(".project").style.color = "#f84545"
    }else{
        document.querySelector(".project").style.color = "#cccccc"
    }
    if( scroll > (aboutmeHeight + skillsHeight + projectsHeight + contactHeight - aboutmeHeight/2)){
        document.querySelector(".contactme").style.color = "#f84545"
    }else{
        document.querySelector(".contactme").style.color = "#cccccc"
    }
}