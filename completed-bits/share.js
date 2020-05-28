const  button = document.querySelector(".container-share")
const  stick1 = document.querySelector(".stick1")
const  stick2 = document.querySelector(".stick2")
const  github = document.querySelector(".github")
const  instagram = document.querySelector(".instagram")
const  linkedin = document.querySelector(".linkedin")
const  logos = document.querySelectorAll("i")
const  allElements = [button, stick1, stick2, github, instagram, linkedin, logos[0], logos[1], logos[2]]


button.addEventListener("click", expand)

function expand() {
    allElements.forEach(element => element.classList.toggle("out"))
}