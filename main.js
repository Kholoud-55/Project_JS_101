// 2D array to store book information [BookId, Title, Author, Price, Quantity]
const books = [
  [1, 'Start with why', 'Simon Sinek', 80.0, 13],
  [2, 'But how do it know', 'J. Clark Scott', 59.9, 22],
  [3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5],
  [4, 'Zero to One', 'Peter Thiel', 45.0, 12],
  [5, "You don't know JS", 'Kyle Simpson', 39.9, 9]
];

// Function to add a new book to the bookstore
function addBook(bookId, title, author, price, quantity) {
  books.push([bookId, title, author, price, quantity]);
  console.log(`Book added successfully: ${title}`);
}

// Function to query a book by Book Id, Title, or Author
function queryBook(id, title, author) {
  const result = [];
  books.forEach(book => {
    if ((id && book[0] === id) || (title && book[1] === title) || (author && book[2] === author)) {
      result.push(book);
    }
  });

  return result;
}

// Function to sell a book and generate an invoice
function sellBook(title, quantity, balance) {
  const book = queryBook(null, title, null)[0];

  if (book) {
    const bookId = book[0];
    const bookPrice = book[3];
    const availableQuantity = book[4];

    if (availableQuantity >= quantity) {
      const totalPrice = bookPrice * quantity;
      if (balance >= totalPrice) {
        book[4] -= quantity;
        balance -= totalPrice;

        console.log(`Invoice for Book: ${title}`);
        console.log(`Book ID: ${bookId}`);
        console.log(`Quantity: ${quantity}`);
        console.log(`Total Price: ${totalPrice}`);
        console.log(`Remaining Balance: ${balance}`);
      } else {
        console.log('Insufficient balance to purchase the required quantity.');
      }
    } else {
      console.log('Insufficient quantity available in the inventory.');
    }
  } else {
    console.log('Book not found in the inventory.');
  }
}

// call methods
addBook(6, 'New Book', 'John Doe', 60.0, 15);
console.log(queryBook(6, null, null));
sellBook('Clean Code', 3, 200);
