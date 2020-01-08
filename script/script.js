const accordion = document.getElementsByClassName("accordion-title");
const accordionContent = document.querySelectorAll(".accordion-content");
const accordionIcon = document.querySelectorAll(".accordion-title__icon");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    accordion[i].classList.toggle("accordion-title_active");
    accordionIcon[i].classList.toggle("accordion-title__icon_active");
    accordionContent[i].classList.toggle("accordion-content_active");
  });
}

const navBtn = document.querySelector(".navigation-button");
const navigation = document.querySelector(".navigation");

navBtn.addEventListener("click", function() {
  navigation.classList.toggle("navigation_active");
});
