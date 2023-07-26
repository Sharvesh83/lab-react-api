import React, { useEffect, useState } from "react";
import axios from "axios";

const BookInfoApp = React.memo(() => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => {
        setBooks(res.data.books);
      })
      .catch((error) => {
          console.log("Status Code: 404");
          console.log("Website not found");
      });
  }, []);

  return (
    <div>
      {books.map((book) => (
        <div className="book-info" key={book.id}>
          <h2>{book.title}</h2>
          <div className="book-body">
            <img src={book.imageLinks.thumbnail} alt="book_img" width={150} />
            <p>{book.description}</p>
          </div>
          <p>{book.authors.join(", ")}</p>
          <hr />
        </div>
      ))}
    </div>
  );
})

export default BookInfoApp;
