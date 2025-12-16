// Add interactivity to the "Read Now" buttons
document.querySelectorAll(".read-btn").forEach((button) => {
    button.addEventListener("click", function () {
        const bookTitle = this.parentElement.querySelector("h3").textContent;
        alert(`You clicked "Read Now" for: ${bookTitle}`);
    });
});