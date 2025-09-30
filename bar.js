const Switch = document.getElementById("LightSwitch");
const html = document.getElementById("html");


const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    html.classList.add("lightM");
    Switch.checked = true;
}


Switch.addEventListener("change", function () {
    if (this.checked) {
        html.classList.add("lightM");
        localStorage.setItem("theme", "light");
    } else {
        html.classList.remove("lightM");
        localStorage.setItem("theme", "dark");
    }
});
