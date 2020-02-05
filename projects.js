let projects = [
    {
        id: 0,
        name: "Money Menager",
        link: "https://konradbukanski.github.io/MoneyManager/.",
        github: "https://github.com/konradbukanski/MoneyManager",
        category: "Bootstrap",
        src: "img/moneymenage.png"
    },
    {
        id: 1,
        name: "Money Menager",
        link: "",
        github: "",
        category: "ReactJS",
        src: "img/moneymenage.png"
    },
    {
        id: 2,
        name: "Money Menager",
        link: "",
        github: "",
        category: "PHP",
        src: "img/moneymenage.png"
    },
    {
        id: 3,
        name: "Money Menager",
        link: "https://konradbukanski.github.io/MoneyManager/.",
        github: "https://github.com/konradbukanski/MoneyManager",
        category: "Bootstrap",
        src: "img/moneymenage.png"
    },
    {
        id: 4,
        name: "Money Menager",
        link: "",
        github: "",
        category: "ReactJS",
        src: "img/moneymenage.png"
    },
    {
        id: 5,
        name: "Money Menager",
        link: "",
        github: "",
        category: "PHP",
        src: "img/moneymenage.png"
    },
    {
        id: 7,
        name: "Money Menager",
        link: "https://konradbukanski.github.io/MoneyManager/.",
        github: "https://github.com/konradbukanski/MoneyManager",
        category: "Bootstrap",
        src: "img/moneymenage.png"
    },
    {
        id: 8,
        name: "Money Menager",
        link: "",
        github: "",
        category: "ReactJS",
        src: "img/moneymenage.png"
    },
    {
        id: 9,
        name: "Money Menager",
        link: "",
        github: "",
        category: "PHP",
        src: "img/moneymenage.png"
    },
]
let projectsActive = [
    {
        id: 0,
        name: "Money Menager",
        link: "https://konradbukanski.github.io/MoneyManager/.",
        github: "https://github.com/konradbukanski/MoneyManager",
        category: "Bootstrap",
        src: "img/moneymenage.png"
    },
    {
        id: 1,
        name: "Money Menager",
        link: "",
        github: "",
        category: "ReactJS"
    },
    {
        id: 2,
        name: "Money Menager",
        link: "",
        github: "",
        category: "PHP"
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
    const link = document.createElement("a")
    link.href = projectsActive[i].link
    p.appendChild(link)
    const eyeicon = document.createElement("i")
    eyeicon.className = "far fa-eye"
    link.appendChild(eyeicon)
    const git = document.createElement("a")
    git.href = projectsActive[i].github
    p.appendChild(git)
    const giticon = document.createElement("i")
    giticon.className = "fab fa-github"
    git.appendChild(giticon)
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