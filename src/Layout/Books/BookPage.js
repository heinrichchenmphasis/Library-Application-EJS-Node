import React from "react";
import { useHistory } from "react-router-dom";
import { bookDeleted } from "../../Store/Slices/booksSlice";
import { useDispatch, useSelector } from "react-redux";

export const BookPage = ({ match }) => {
  const { bookId } = match.params;

  const book = useSelector((state) =>
    state.books.list.find((book) => book.id == bookId)
  );

  const dispatch = useDispatch();
  const history = useHistory();

  if (!book) {
    return (
      <section>
        <h2>Book not found!</h2>
      </section>
    );
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <div>By {book.author}</div>
      <div>Book Reference Number {book.bookReference}</div>
      <button class="btn btn-primary mx-1" onClick={editBook}>
        Edit
      </button>
      <button class="btn btn-danger mx-1" onClick={deleteBook}>
        Delete
      </button>
    </div>
  );

  function editBook() {
    history.push(`/editBook/${book.id}`);
  }

  function deleteBook() {
    dispatch(bookDeleted({ id: bookId }));
    history.push(`/books`);
  }
};
