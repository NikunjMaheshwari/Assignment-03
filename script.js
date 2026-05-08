function greetUser() {
    let name = document.getElementById("nameInput").value.trim();
    let greeting = document.getElementById("greeting");

    if (name === "") {
        greeting.innerText = "Hello";
        return;
    }

    greeting.innerText = "Hello, " + name;
}

function changeColor(element, color) {
    element.style.backgroundColor = color;

    // Improve text visibility
    if (color === "yellow") {
        element.style.color = "black";
    } else {
        element.style.color = "white";
    }
}