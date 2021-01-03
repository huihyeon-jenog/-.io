const slide2 = document.querySelector(".slide2");
const slideItem2 = document.querySelectorAll(".slideItem2");

const prev = document.querySelector(".prev"),
    next = document.querySelector(".next");

let counter = 3;
const slideWidth2 = slideItem2[0].clientWidth;
console.log(slideWidth2);
slide2.style.transform = `translate3D(${-slideWidth2*counter}px,0,0)`;

next.addEventListener("click",() => {
    if(counter >= slideItem2.length-1) return;
    slide2.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide2.style.transform = `translate3D(${-slideWidth2*counter}px,0,0)`;
});
prev.addEventListener("click",() => {
    if(counter <= 0) return;
    slide2.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide2.style.transform = `translate3D(${-slideWidth2*counter}px,0,0)`;
});

slide2.addEventListener("transitionend", () => {
    if(slideItem2[counter].id === "lastclone"){
        slide2.style.transition = "none";
        counter = slideItem2.length -2;
        slide2.style.transform = `translate3D(${-slideWidth2*counter}px,0,0)`;
    }
    if(slideItem2[counter].id === "firstclone"){
        slide2.style.transition = "none";
        counter = slideItem2.length - counter;
        slide2.style.transform = `translate3D(${-slideWidth2*counter}px,0,0)`;
    }
});