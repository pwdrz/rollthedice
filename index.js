var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

if (randomNumber1 === 1) {
    document.querySelectorAll("img")[0].setAttribute("src","./wuerfelBilder/wuerfel01.png");
} else if (randomNumber1 === 2) {
    document.querySelectorAll("img")[0].setAttribute("src","./wuerfelBilder/wuerfel02.png");
} else if (randomNumber1 === 3) {
    document.querySelectorAll("img")[0].setAttribute("src","./wuerfelBilder/wuerfel03.png");
} else if (randomNumber1 === 4) {
    document.querySelectorAll("img")[0].setAttribute("src","./wuerfelBilder/wuerfel04.png");
} else if (randomNumber1 === 5) {
    document.querySelectorAll("img")[0].setAttribute("src","./wuerfelBilder/wuerfel05.png");
} else {
    document.querySelectorAll("img")[0].setAttribute("src","./wuerfelBilder/wuerfel06.png");
}

if (randomNumber2 === 1) {
    document.querySelectorAll("img")[1].setAttribute("src","./wuerfelBilder/wuerfel01.png");
} else if (randomNumber2 === 2) {
    document.querySelectorAll("img")[1].setAttribute("src","./wuerfelBilder/wuerfel02.png");
} else if (randomNumber2 === 3) {
    document.querySelectorAll("img")[1].setAttribute("src","./wuerfelBilder/wuerfel03.png");
} else if (randomNumber2 === 4) {
    document.querySelectorAll("img")[1].setAttribute("src","./wuerfelBilder/wuerfel04.png");
} else if (randomNumber2 === 5) {
    document.querySelectorAll("img")[1].setAttribute("src","./wuerfelBilder/wuerfel05.png");
} else {
    document.querySelectorAll("img")[1].setAttribute("src","./wuerfelBilder/wuerfel06.png");
}

if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="Spieler 2 gewinnt! <i class='fa-solid fa-trophy'></i>";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="<i class='fa-solid fa-trophy'></i> Spieler 1 gewinnt!";
} else {
    document.querySelector("h1").innerHTML="<i class='fa-solid fa-handshake'></i> Unentschieden <i class='fa-solid fa-handshake'></i>";
}