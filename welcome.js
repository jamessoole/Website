// keep navbar in place
window.onscroll = function() {stick()};
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
function stick() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


// to fade away thing on top of navbar
window.scroll(function() {
    scrollPosition = win.scrollTop();
    scrollRatio = 1 - scrollPosition / 300;
    $(".top").css("opacity", scrollPosition);
})

