document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById("reviewForm");
    const reviewsContainer = document.getElementById("reviewsContainer");

    // Load reviews from localStorage
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // Render reviews
    function renderReviews() {
        reviewsContainer.innerHTML = "";
        reviews.forEach((review, index) => {
            const reviewItem = document.createElement("div");
            reviewItem.classList.add("review-item");
            reviewItem.innerHTML = `
                <h3>${review.name}</h3>
                <p>${review.content}</p>
            `;
            reviewsContainer.appendChild(reviewItem);
        });
    }

    // Submit review
    reviewForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("reviewName").value.trim();
        const content = document.getElementById("reviewContent").value.trim();

        if (name && content) {
            reviews.push({ name, content });
            localStorage.setItem("reviews", JSON.stringify(reviews));
            renderReviews();
            reviewForm.reset();
        } else {
            alert("Please fill out both fields.");
        }
    });

    // Initial render
    renderReviews();
});