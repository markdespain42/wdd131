const year = document.querySelector("#year");

const currentYear = new Date().getFullYear();

year.textContent = currentYear


document.querySelector(".button").addEventListener("click", menuButton)
function menuButton() {
    menuButton.classList.toggle("hide")
}
