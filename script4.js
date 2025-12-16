document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const resultsContainer = document.getElementById("resultsContainer");

    // Sample data for search results
    const books = [
        { title: "The Great Gatsby", description: "A classic novel by F. Scott Fitzgerald." },
        { title: "To Kill a Mockingbird", description: "A novel by Harper Lee." },
        { title: "1984", description: "A dystopian novel by George Orwell." },
        { title: "Pride and Prejudice", description: "A romantic novel by Jane Austen." },
        { title: "Sapiens: A Brief History of Humankind", description: "Yuval Noah Harari" },
        { title: "Becoming", description: "Michelle Obama" },
        { title: "Educated", description: "Tara WestOver" },
        { title: "Atomic Habits", description: "James Clear" },
        { title: "The Lion, the Witch and the Wardrobe", description: "C.S.Lewis" },
        { title: "Charlotte's Web", description: "E.B.White" },
        { title: "Matilda", description: "Roald Dahl" },
        { title: "Where the Wild Things Are", description: "Maurice Sendak" },
        { title: "The Hobbit", description: "J.R.R. Tolkien" },
        { title: "Harry Potter and the Sorcerer's Stone", description: "J.K. Rowling" },
        { title: "A Game of Thrones", description: "George R.R. Martin" },
        { title: "Mistborn: The Final Empire", description: "Brandon Sanderson" },
        { title: "Guns, Germs, and Steel", description: "Jared Diamond" },
        { title: "The Silk Roads", description: "Peter Frankopan" },
        { title: "1491: New Revelations of the Americas Before Columbus", description: "Charles C. Mann" },
        { title: "The Wright Brothers", description: "Fred c.kelly" },
        { title: "The Secret", description: "Rhonda Byrne" },
        { title: "Half GirlFriend", description: "Chetan Bhagat" },
        { title: "Disney Frozen2", description: "Dark HSorse Comics" }
    ];

    // Function to display search results
    function displayResults(results) {
        resultsContainer.innerHTML = "";
        if (results.length === 0) {
            resultsContainer.innerHTML = "<p>No results found.</p>";
            return;
        }
        results.forEach((book) => {
            const resultItem = document.createElement("div");
            resultItem.classList.add("result-item");
            resultItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>${book.description}</p>
                <button class="read-button" data-title="${book.title}">Read Now</button>
            `;
            resultsContainer.appendChild(resultItem);
        });

        // Add event listeners to all read buttons
        document.querySelectorAll('.read-button').forEach(button => {
            button.addEventListener('click', function() {
                const bookTitle = this.getAttribute('data-title');
                alert(`Opening "${bookTitle}" for reading...`);
                // In a real application, you would redirect to the reading page or open a reader
                // window.location.href = `/read?book=${encodeURIComponent(bookTitle)}`;
            });
        });
    }

    // Search functionality
    searchButton.addEventListener("click", function () {
        const query = searchInput.value.trim().toLowerCase();
        if (query) {
            const results = books.filter((book) =>
                book.title.toLowerCase().includes(query) ||
                book.description.toLowerCase().includes(query)
            );
            displayResults(results);
        } else {
            alert("Please enter a search term.");
        }
    });

    // Initial display of all books
    displayResults(books);
});