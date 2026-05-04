function greetUser() {
    let name = document.getElementById("nameInput").value;
    let greeting = document.getElementById("greeting");

    if (name.trim() === "") {
        greeting.innerText = "Hello";
    } else {
        greeting.innerText = "Hello, " + name;
    }
}

function changeColor(element, color) {
    element.style.backgroundColor = color;

    // Optional: change text color for visibility
    if (color === "yellow") {
        element.style.color = "black";
    } else {
        element.style.color = "white";
    }
}