var currind = 0;
slideNow();

function slideNow() {
    var i;
    var x = document.getElementsByClassName("Slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    currind++;
    if (currind > x.length) { currind = 1 }
    x[currind - 1].style.display = "block";
    setTimeout(slideNow, 3000);
}

