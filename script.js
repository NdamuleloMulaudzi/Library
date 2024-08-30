const displayForm = document.querySelector("#displayFormBtn");
const closeForm = document.querySelector("#closeFormBtn");
const dialog = document.querySelector("dialog");
const displayBooks = document.querySelector("#displayBook");
const removeBook = document.querySelector("#remove");

//retrive input elements
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const readStatus = document.querySelectorAll('input[name="readStatus"]');

const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBook() {
  displayBooks.innerHTML = "";
  myLibrary.map((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.setAttribute("class", "bookCard");
    bookCard.innerHTML = `<h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read Yet ?: ${book.isRead ? "No" : "Yes"} </p>
      <button class="ReadBtn">${book.isRead ? "I've Read" : "Not Read"}</button>
      <button class="remove" id="${index}">Remove</button>`;

    bookCard.querySelector(".ReadBtn").addEventListener("click", () => {
      book.isRead = !book.isRead; // Toggle the read status
      displayBook(); // Update the display to reflect changes
    });
    displayBooks.appendChild(bookCard);
  });

  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.getAttribute("id");
      myLibrary.splice(index, 1);
      displayBook();
    });
  });
}

const book1 = new Book("Someday, Maybe", "Onyi Nwabineli ", 352);
const book2 = new Book("Exit Wounds", "Peter Godwin", 288);
const book3 = new Book(
  "Before I Let Go: the perfect angst-ridden romance",
  " Kennedy Ryan ",
  400
);
const book4 = new Book("I Do… Don't I?", "Zibu Sithole", 216);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
displayBook();

displayForm.addEventListener("click", () => {
  dialog.showModal();
});

closeForm.addEventListener("click", (event) => {
  event.preventDefault();

  let book = new Book(title.value, author.value, pages.value);
  addBookToLibrary(book);
  displayBook();
  dialog.close();
});
