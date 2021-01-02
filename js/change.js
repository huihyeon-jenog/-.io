const deposit = document.querySelector(".deposit");
const depositTxt = document.querySelector(".left");
const cardTxt = document.querySelector(".right");
const card = document.querySelector(".card");

const SHOW = "show"
const REMOVE = "none"

function changed(clickValue){
    if(clickValue === 0){
        clickValue = "deposit";
        deposit.style.display = "flex";
        depositTxt.classList.add(SHOW);
        depositTxt.classList.remove(REMOVE);
        cardTxt.classList.remove(SHOW);
        card.style.display = "none";
    }else{
        clickValue = "card";
        card.style.display = "flex";        
        cardTxt.classList.add(SHOW);
        depositTxt.classList.add(REMOVE);
        deposit.style.display = "none";
    }
}

