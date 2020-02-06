let skills = true
let projectActive = true


document.addEventListener("scroll", () => {
  let scroll = document.documentElement.scrollTop
  if( scroll < aboutmeHeight+skillsHeight - aboutmeHeight/2 && scroll > aboutmeHeight - aboutmeHeight/2){
    document.querySelector(".aboutme__content--photo").classList.add("showPhoto");
    document.querySelector(".aboutme__content--profiles").classList.add("showProfiles");
    document.querySelector(".content__info--text").classList.add("showText");
    document.querySelector(".content__info--technologies").classList.add("showTechnologies");
  
  }
  if( skills && scroll < aboutmeHeight+skillsHeight+projectsHeight - aboutmeHeight/2 && scroll > (aboutmeHeight + skillsHeight - aboutmeHeight/2) ){
    skills = !skills
    document.querySelectorAll(".progres").forEach(element => {
      element.classList.add("progresAnime");
      document.querySelectorAll(".skills_technologies img").forEach(element => {
        element.classList.add("showElement");
      });
    });
  }
  if( projectActive && scroll < aboutmeHeight+skillsHeight+projectsHeight+contactHeight-aboutmeHeight/2 && scroll > (aboutmeHeight + skillsHeight + projectsHeight - aboutmeHeight/2)){
    projectActive = !projectActive
    document.querySelector(".projects__items").classList.add("showProjects");
  };
});
