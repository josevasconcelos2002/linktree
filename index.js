const toggle = document.getElementById("toggle_button");
const body = document.getElementById("body");

function switchBackgroundColor() {
    body.classList.toggle("light");
    body.classList.toggle("dark");
}

if (toggle) {
    toggle.addEventListener("click", switchBackgroundColor);
} else {
    console.log("Error: toggle button not found");
}
