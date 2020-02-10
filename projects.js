let projects = [
    {
        id: 1,
        name: "Homester.pl",
        link: "https://kancelariaprzeciwegzekucyjna.pl/",
        github: "",
        category: "JavaScript",
        src: "img/homester.png"
    },
    {
        id: 2,
        name: "Sterecki.pl",
        link: "https://konradbukanski.github.io/buildmenager/",
        github: "https://github.com/konradbukanski/buildmenager",
        category: "JavaScript",
        src: "img/sterecki.png"
    },
    {
        id: 3,
        name: "Wypozyczalniaskawina.pl",
        link: "https://www.wypozyczalniaskawina.pl/",
        github: "",
        category: "JavaScript",
        src: "img/wypozyczalniakamperow.png"
    },
    {
        id: 4,
        name: "zdanamatma.pl",
        link: "https://www.zdanamatma.pl/",
        github: "",
        category: "JavaScript",
        src: "img/zdanamatma.png"
    },
    {
        id: 5,
        name: "zdanamatma.pl",
        link: "https://konradbukanski.github.io/zdanamatma/",
        github: "https://github.com/konradbukanski/zdanamatma",
        category: "JavaScript",
        src: "img/zdanamatma2.png"
    },
    {
        id: 6,
        name: "Portfolio",
        link: "https://konradbukanski.github.io/PortfolioPage/",
        github: "https://github.com/konradbukanski/PortfolioPage",
        category: "JavaScript",
        src: "img/portfolio.png"
    },
]
let projectsActive = [
    {
        id: 1,
        name: "Homester.pl",
        link: "https://kancelariaprzeciwegzekucyjna.pl/",
        github: "",
        category: "JavaScript",
        src: "img/homester.png"
    },
    {
        id: 2,
        name: "Sterecki.pl",
        link: "https://konradbukanski.github.io/buildmenager/",
        github: "https://github.com/konradbukanski/buildmenager",
        category: "JavaScript",
        src: "img/sterecki.png"
    },
    {
        id: 3,
        name: "Wypozyczalniaskawina.pl",
        link: "https://www.wypozyczalniaskawina.pl/",
        github: "",
        category: "JavaScript",
        src: "img/wypozyczalniakamperow.png"
    },
    {
        id: 4,
        name: "zdanamatma.pl",
        link: "https://www.zdanamatma.pl/",
        github: "",
        category: "JavaScript",
        src: "img/zdanamatma.png"
    },
    {
        id: 5,
        name: "zdanamatma.pl",
        link: "https://konradbukanski.github.io/zdanamatma/",
        github: "https://github.com/konradbukanski/zdanamatma",
        category: "JavaScript",
        src: "img/zdanamatma2.png"
    },
    {
        id: 6,
        name: "Portfolio",
        link: "https://konradbukanski.github.io/PortfolioPage/",
        github: "https://github.com/konradbukanski/PortfolioPage",
        category: "JavaScript",
        src: "img/portfolio.png"
    },

]
const items = document.querySelector(".projects__items")


function showprojects() {
items.innerHTML = ""
for(i=0; i<projectsActive.length; i++){
    const item = document.createElement("div")
    item.className = "projects__item"    
    // item.innerHTML = "nowy"
    items.appendChild(item)
    //dodanie zdjęcia
    const img = document.createElement("img")
    img.src = projectsActive[i].src
    item.appendChild(img)
    //dodanie tytulu
    const name = document.createElement("span")
    name.className = "projects__item--title"
    name.innerHTML = projectsActive[i].name
    item.appendChild(name)
    //dodanie linków
    const links = document.createElement("div")
    links.className = "projects__item--text"
    item.appendChild(links)
    const p = document.createElement("p")
    links.appendChild(p)
    if(projectsActive[i].link){
    const link = document.createElement("a")
    link.href = projectsActive[i].link
    p.appendChild(link)
    const eyeicon = document.createElement("i")
    eyeicon.className = "far fa-eye"
    link.appendChild(eyeicon)
    }
    if(projectsActive[i].github){
        const git = document.createElement("a")
        git.href = projectsActive[i].github
        p.appendChild(git)
        const giticon = document.createElement("i")
        giticon.className = "fab fa-github"
        git.appendChild(giticon)
    }

}

}
showprojects() 

document.addEventListener("click", (el)=> {
    if(el.target.value) {projectsActive = []}
    for(i=0; i<projects.length; i++){
        if(el.target.value === projects[i].category){
            projectsActive.push(projects[i])
            console.log(projectsActive)
        }
    }
    showprojects()
    
})