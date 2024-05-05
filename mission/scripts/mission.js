
const themeSelector = document.getElementById("themeSelector");
themeSelector.addEventListener("click", changeTheme)

const logoImage = document.getElementById("logo");
const otherImage = document.getElementById("logo-dark");


function changeTheme() {
        const selectedTheme = themeSelector.value;
        if (themeSelector.value == "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");

            logoImage.classList.add("logo");
            otherImage.classList.remove("logo-dark");
        } else if (selectedTheme == "dark") {
            document.body.classList.remove("light");
            document.body.classList.add("dark");

            otherImage.classList.add("logo-dark");
            logoImage.classList.remove("logo");

        }
}
