import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { bookAdded } from "../../Store/Slices/booksSlice";

export const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [bookReference, setBookReference] = useState("");

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);
  const onBookReferenceChanged = (e) => setBookReference(e.target.value);

  const onAddBookClicked = () => {
    if (title && author && bookReference) {
      dispatch(bookAdded({ title, author, bookReference }));
      setTitle("");
      setAuthor("");
      setBookReference("");
    }
  };

  const canAdd = Boolean(title) && Boolean(author) && Boolean(bookReference);

  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter book title"
          value={title}
          onChange={onTitleChanged}
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          className="form-control"
          id="author"
          placeholder="Enter book author"
          value={author}
          onChange={onAuthorChanged}
        />
      </div>
      <div className="form-group">
        <label htmlFor="bookReference">Book Reference</label>
        <input
          type="text"
          className="form-control"
          id="bookReference"
          placeholder="Enter book reference number"
          value={bookReference}
          onChange={onBookReferenceChanged}
        />
      </div>
      <button
        type="button"
        onClick={onAddBookClicked}
        disabled={!canAdd}
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default AddBookForm;
