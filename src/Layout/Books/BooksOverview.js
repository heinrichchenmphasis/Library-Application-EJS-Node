import BookList from "../../Cells/Lists/BookList";
import AddBookForm from "../../Cells/Forms/AddBookForm.js";
import React from "react";
import { useHistory } from "react-router-dom";

export const BooksOverview = () => {
  const history = useHistory();

  return (
    <div className="container py-3">
      <h2>Books</h2>
      <div className="row justify-content-between py-3">
        <div className="col-5">
          <BookList onClick={(id) => () => handleClick(id)} />
        </div>
        <div className="col-5">
          <AddBookForm />
        </div>
      </div>
    </div>
  );

  function handleClick(id) {
    history.push(`/books/${id}`);
  }
};

export default BooksOverview;
