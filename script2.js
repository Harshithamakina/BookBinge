// Add interactivity to the "Get Started" button
document.querySelector(".intro button").addEventListener("click", function () {
    alert("Welcome to WATTPAD! Let's get started.");
});

// Add hover effect to work items
document.querySelectorAll(".work").forEach((work) => {
    work.addEventListener("mouseenter", () => {
        work.style.transform = "translateY(-10px)";
    });
    work.addEventListener("mouseleave", () => {
        work.style.transform = "translateY(0)";
    });
});