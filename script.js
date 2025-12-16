// script.js
document.addEventListener("DOMContentLoaded", function () {
    const notesList = document.getElementById("notes-list");
    const addNoteBtn = document.getElementById("add-note-btn");
    const noteTitleInput = document.getElementById("note-title");
    const noteContentInput = document.getElementById("note-content");

    // Load notes from localStorage
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    // Render notes
    function renderNotes() {
        notesList.innerHTML = "";
        notes.forEach((note, index) => {
            const noteElement = document.createElement("div");
            noteElement.classList.add("note");
            noteElement.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.content}</p>
                <div class="note-actions">
                    <button class="edit-btn" onclick="editNote(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
                </div>
            `;
            notesList.appendChild(noteElement);
        });
    }

    // Add a new note
    addNoteBtn.addEventListener("click", function () {
        const title = noteTitleInput.value.trim();
        const content = noteContentInput.value.trim();

        if (title && content) {
            notes.push({ title, content });
            localStorage.setItem("notes", JSON.stringify(notes));
            renderNotes();
            noteTitleInput.value = "";
            noteContentInput.value = "";
        } else {
            alert("Please enter both title and content.");
        }
    });

    // Edit a note
    window.editNote = function (index) {
        const newTitle = prompt("Enter new title:", notes[index].title);
        const newContent = prompt("Enter new content:", notes[index].content);

        if (newTitle !== null && newContent !== null) {
            notes[index] = { title: newTitle, content: newContent };
            localStorage.setItem("notes", JSON.stringify(notes));
            renderNotes();
        }
    };

    // Delete a note
    window.deleteNote = function (index) {
        if (confirm("Are you sure you want to delete this note?")) {
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            renderNotes();
        }
    };

    // Initial render
    renderNotes();
});