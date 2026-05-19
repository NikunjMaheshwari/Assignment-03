function greetUser() {

    let name = document.getElementById("nameInput").value.trim();
    let greeting = document.getElementById("greeting");
    let errorMsg = document.getElementById("errorMsg");

    // Empty validation
    if (name === "") {
        errorMsg.innerText = "Name field cannot be empty";
        greeting.innerText = "Hello";
        return;
    }

    // Minimum length validation
    if (name.length < 3) {
        errorMsg.innerText = "Name must contain at least 3 characters";
        greeting.innerText = "Hello";
        return;
    }

    // Only letters validation
    let namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {
        errorMsg.innerText = "Only alphabets are allowed";
        greeting.innerText = "Hello";
        return;
    }

    // Success
    errorMsg.innerText = "";
    greeting.innerText = "Hello, " + name;
}

function changeColor(element, color) {

    element.style.backgroundColor = color;

    // Text visibility
    if (color === "yellow") {
        element.style.color = "black";
    } else {
        element.style.color = "white";
    }
}