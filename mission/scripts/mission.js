
const themeSelector = document.getElementById("themeSelector");
themeSelector.addEventListener("click", changeTheme)

// const darkImage = document.getElementById("logo").setAttribute("src");
// const lightImage = document.getElementById("logo").setAttribute("src");
const logo = document.querySelector(".logo");
function changeTheme() {
        const selectedTheme = themeSelector.value;
        if (themeSelector.value == "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");

            logo.src = "byui-logo_blue.webp"
        } else if (selectedTheme == "dark") {
            document.body.classList.remove("light");
            document.body.classList.add("dark");

            logo.src = "byui-logo_white.png"
        }
}
