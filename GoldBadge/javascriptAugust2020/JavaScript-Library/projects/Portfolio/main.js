const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
    // console.log('Offset: ' + offset);
    // //if the page is scrolled to 30 pixels, our image will scroll offset by .7
    // console.log('offset * 0.7' + offset * 0.7);
})