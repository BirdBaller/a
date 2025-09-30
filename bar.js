const Switch = document.getElementById("LightSwitch");
const html = document.getElementById("html");


const toggled = localStorage.getItem("on");
if (toggled === "light") {
    html.classList.add("lightM");
    Switch.checked = true;
}


Switch.addEventListener("change", function () {
    if (this.checked) {
        html.classList.add("lightM");
        localStorage.setItem("on", "light");
    } else {
        html.classList.remove("lightM");
        localStorage.setItem("on", "dark");
    }
});
