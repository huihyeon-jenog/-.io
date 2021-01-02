const SHOWING_CLASS = "showing";
const active = "active";
const slideList = document.querySelector(".slide")
const slideItem = document.querySelectorAll(".slideItem");
const click = document.querySelector(".dots");
const dot = document.getElementsByClassName("dot");
const firstDot = document.querySelector(".dot:first-child");
const pause = document.querySelector(".stop");
const play = document.querySelector(".start");
const slideLen = slideItem.length;
const slidewidth = 586;

let curIndex = 0;
let playing = true;
let clickValue = false;

slideList.style.width = slidewidth * (slideLen) + "px";


pause.addEventListener("click",function(){
    pause.style.display = "none";
    play.style.display = "block";
    playing = false;
})
play.addEventListener("click",function(){
    play.style.display = "none";
    pause.style.display = "block"; 
    playing = true;
    setTimeout(showSlide, 4000);

})

function clickDot(clickIndex){
    slideList.style.left = -(slidewidth * clickIndex) + "px";
    for( var i=0; i<slideLen; i++){
        dot[i].classList.remove(active);
        if(i===clickIndex){
            dot[i].classList.add(active);
        }
    }
    curIndex = clickIndex;
    clickValue = true;
    clearTimeout(showSlide)
}



function clickSlide(){
    if(!playing){
        clearTimeout(showSlide)
    }else{
    for( var i=0; i<slideLen; i++){
        if(curIndex === 0){
            dot[2].classList.remove(active);
        }
        slideList.style.left = -(slidewidth * curIndex) + "px";
        dot[curIndex].classList.add(active);
        slideList.classList.add(SHOWING_CLASS);
        if(curIndex){
            dot[curIndex-1].classList.remove(active);
        }
    }
    curIndex++;
    if( curIndex === slideLen){
            curIndex = 0;
        }
    setTimeout(clickSlide, 4000);
}
}
function showSlide(){

    if(!playing){
        clearTimeout(showSlide)
    }
    else{
        if(clickValue){
            clickSlide();
        }else{
        for( var i=0; i<slideLen; i++){
            if(curIndex === 0){
                dot[2].classList.remove(active);
            }
            slideList.style.left = -(slidewidth * curIndex) + "px";
            dot[curIndex].classList.add(active);
            slideList.classList.add(SHOWING_CLASS);
            if(curIndex){
                    dot[curIndex-1].classList.remove(active);
            }
        }
        curIndex++;
        
        if( curIndex === slideLen){
            curIndex = 0;
        }
        setTimeout(showSlide, 4000);
    }
}
}
showSlide();

