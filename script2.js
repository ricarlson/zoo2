
//List of fortunes for label change
var fortunes = [
    'A fresh start will put you on your way.',
    'You will inherit a large sum of money.',
    'A lifetime of happiness lies ahead of you.',
    'You are soon going to change your present line of work.'
]

// Change label, query selector, function, onlick event handler, 
function tellFortune() {
    var randomNumber = Math.floor(Math.random() * (fortunes.length));
    document.querySelector('.fortune').innerHTML = fortunes[randomNumber];
}



//remove header
let changeH = document.getElementById("change");
changeH.style.display = "none";

//add h2 element
let changeP2 = document.querySelector("changeAgain");
