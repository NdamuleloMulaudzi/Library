const dispalyForm = document.querySelector("#displayFormBtn");
const closeForm = document.querySelector("#closeFormBtn");
const dialog = document.querySelector("dialog");

const myLibrary = [];

function Book() {
  this.info = function () {};
}

function addBookToLibrary() {}

dispalyForm.addEventListener("click", () => {
  dialog.showModal();
});

closeForm.addEventListener("click", () => {
  dialog.close();
});
