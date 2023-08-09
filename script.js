// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("changeText");

    button.addEventListener("click", function() {
        const paragraph = document.getElementById("dynamicText");
        paragraph.textContent = "You've changed the text using JavaScript!";
    });
});
