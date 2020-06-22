var slideIndex = [1,1,1];
var slideId = ["star-slider1", "star-slider2","star-slider3"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);



function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {

    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";

    }
    console.log(x,slideIndex[no]);
    x[slideIndex[no]-1].style.display = "block";
}