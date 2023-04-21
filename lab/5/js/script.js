var intervalID;  // global variable needed to close interval

window.onload = function () {
    showDate();   
}

document.querySelector("div#datetime").onmouseover = function () {
    intervalID = setInterval(showTime, 1000);
};

document.querySelector("div#datetime").onmouseout = function () {
    clearInterval(intervalID);
    showDate();
}

function showDate() {
    document.querySelector("div#datetime").innerHTML = new Date().toDateString();
}

function showTime() {
    document.querySelector("div#datetime").innerHTML = new Date().toLocaleTimeString();
}


document.querySelector("#img1").onmouseover = function () {
    document.images['img1'].src = "images/1/gif.gif";
}
document.querySelector("#img1").onmouseout = function () {
    document.images['img1'].src = "images/1/image.jpg";
}

document.querySelector("#img2").onmouseover = function () {
    document.images['img2'].style = "filter: blur(0px);"
}
document.querySelector("#img2").onmouseout = function () {
    document.images['img2'].style = "filter: blur(5px);"
}

document.querySelector("#img3").onmouseover = function () {
    document.images['img3'].style = "filter: grayscale(0%);"
}
document.querySelector("#img3").onmouseout = function () {
    document.images['img3'].style = "filter: grayscale(100%);"
}

document.querySelector("#img4").onmouseover = function () {
    document.images['img4'].style = "filter: opacity(1);"
}
document.querySelector("#img4").onmouseout = function () {
    document.images['img4'].style = "filter: opacity(.5);"
}

document.querySelector("#img5").onmouseover = function () {
    document.images['img5'].style = "filter: brightness(1.2);"
}
document.querySelector("#img5").onmouseout = function () {
    document.images['img5'].style = "filter: brightness(.5);"
}