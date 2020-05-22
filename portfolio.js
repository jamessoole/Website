// date for copyright
// const date = new Date();
// document.getElementById("demo").innerHTML = date;

//scroll back top top
const topButton = document.getElementById("topButton");
window.onscroll = function() {
    scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 705 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}
//go back to top when clicked
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}