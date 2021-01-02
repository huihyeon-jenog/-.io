const slideList = document.querySelector(".slide");
const slideContents = document.querySelectorAll(".slideItem");
const dots = document.querySelector(".dot");
const slideLen = slideContents.length;
const slidewidth = 400;
const slideSpeed = 300;

slideList.style.width = slidewidth * (slideLen) + "px";