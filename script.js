const displayForm = document.querySelector("#displayFormBtn");
const closeForm = document.querySelector("#closeFormBtn");
const dialog = document.querySelector("dialog");
const displayBooks = document.querySelector("#displayBook");

//retrive input elements
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const notRead = document.querySelector("#notRead");

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
  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.innerHTML = `<h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.isRead ? "Yes" : "No"}</p>
      <button id="remove">Remove</button>`;
    displayBooks.appendChild(bookCard);
  });
}

displayForm.addEventListener("click", () => {
  dialog.showModal();
});

closeForm.addEventListener("click", (event) => {
  let book = new Book(title.value, author.value, pages.value);
  addBookToLibrary(book);
  displayBook();
  dialog.close();
  event.preventDefault();
});
