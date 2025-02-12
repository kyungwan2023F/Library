const myLibrary = [];

function Book(title, author) {
  // the constructor...
  this.title = title;
  this.author = author;
}

function addBookToLibrary(title, author) {
  // take params, create a book then store it in the array
  this.title = title;
  this.author = author;

  const book = new Book(title, author);

  myLibrary.push(book);
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBook();
}

const container = document.getElementById("card-container");

function displayBook() {
  container.innerHTML = "";
  myLibrary.forEach((book, index) => {
    // Build your card
    const card = document.createElement("div");
    card.classList.add("card");

    const heading = document.createElement("h2");
    heading.textContent = book.title;
    card.appendChild(heading);

    const author = document.createElement("h3");
    author.textContent = `by ${book.author}`;
    card.appendChild(author);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");

    removeButton.addEventListener("click", () => {
      removeBook(index);
    })
    card.appendChild(removeButton);

    

    // Append the card to the container
    container.appendChild(card);
  });
};

addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald");
addBookToLibrary("1984", "George Orwell");
addBookToLibrary("Brave New World", "Aldous Huxley");

displayBook();

const button = document.querySelector(".input-button");
const dialog = document.getElementById("myDialog");
const form = document.getElementById("book-form");
const cancelButton = document.getElementById("cancel");

button.addEventListener("click", () => {
  dialog.showModal();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  addBookToLibrary(title, author);
  alert(`Submitted Book: ${document.getElementById("title").value} by ${document.getElementById("author").value}`);
  dialog.close();
  displayBook();
});

cancelButton.addEventListener("click", () => {
  dialog.close();
});






