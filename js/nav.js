window.addEventListener("scroll", function(){
    var menu = document.querySelector(".menu-nav");
    menu.classList.toggle("abajo",window.scrollY>0);
})



document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}

var  menunav = document.querySelector(".menu-nav");
var  menuLinks = document.querySelector(".nav_links");
var  menuIco = document.querySelector(".bars__menu");

menuIco.onclick = function(){
    menuLinks.classList.toggle('open');
}

