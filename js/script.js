"use strict";

window.onload = function() {
 stickyFunction()
};
window.onscroll = function() {stickyFunction()};

const navbar = document.getElementById("navbar");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const mobileViewMenu = document.getElementById("mobile-view-menu");
const overlay = document.getElementById("overlay");

const sticky = navbar.offsetTop;

function stickyFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

hamburgerIcon.addEventListener("click",()=>{
  overlay.classList.toggle("active-overlay");
  mobileViewMenu.classList.remove("active");

  hamburgerIcon.style.display = "none";
  closeIcon.classList.remove("active");
  
});


closeIcon.addEventListener("click",()=>{
  overlay.classList.toggle("active-overlay");
  mobileViewMenu.classList.add("active");

  hamburgerIcon.style.display = "flex";
  closeIcon.classList.add("active");
  
});

