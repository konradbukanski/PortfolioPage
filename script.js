const aboutText = document.querySelector(".aboutme__content__info--text");
const aboutImage = document.querySelector(".aboutme__content--photo--shape");
const aboutCloud = document.querySelectorAll(".aboutme__cloud p span");

const aboutme = document.querySelector(".aboutme");
const about = document.querySelector(".about");

document.addEventListener("scroll", () => {
  if (scrollY > about.scrollHeight / 2) {
    console.log("hello");
    aboutText.classList.add("moveLeft");
    aboutImage.classList.add("moveRight");
    aboutCloud.forEach(element => {
      element.classList.add("progres");
    });
  }
});
