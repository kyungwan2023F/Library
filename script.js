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

const container = document.getElementById("card-container");

function displayBook() {
    myLibrary.forEach((book) => {
        // Build your card
        const card = document.createElement("div");
        card.classList.add("card");
      
        const heading = document.createElement("h2");
        heading.textContent = book.title;
        card.appendChild(heading);
      
        const author = document.createElement("h3");
        author.textContent = `by ${book.author}`;
        card.appendChild(author);
      
        // Append the card to the container
        container.appendChild(card);
      });
};

addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald");
addBookToLibrary("1984", "George Orwell");
addBookToLibrary("Brave New World", "Aldous Huxley");

displayBook();


