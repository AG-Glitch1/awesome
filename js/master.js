
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.main-nav')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll('.nav-link').forEach(n => n.
addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))



let tabs = document.querySelectorAll('.tabs li');
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".contentli > div");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("actiive");
        });
        e.currentTarget.classList.add("actiive");
        divsArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
});

