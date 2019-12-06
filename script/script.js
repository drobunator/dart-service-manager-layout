let accordion = document.getElementsByClassName('accordion-title');


for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        accordion[i].classList.toggle('accordion-title_active');
        accordion[i].lastElementChild.classList.toggle('accordion-title__icon_active');
        accordion[i].nextElementSibling.classList.toggle('accordion-content_active');
    });
}


let navBtn = document.getElementsByClassName('navigation-button');

for (let i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener('click', function () {
        navBtn[i].nextElementSibling.classList.toggle('navigation_active')
    });
}
