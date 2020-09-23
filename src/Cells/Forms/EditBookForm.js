import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bookUpdated } from "../../Store/Slices/booksSlice";
import { useHistory } from "react-router-dom";

export const EditBookForm = ({ match }) => {
  const { bookId } = match.params;
  const book = useSelector((state) =>
    state.books.list.find((book) => book.id == bookId)
  );

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [bookReference, setBookReference] = useState(book.bookReference);

  const dispatch = useDispatch();
  const history = useHistory();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);
  const onBookReferenceChanged = (e) => setBookReference(e.target.value);

  const onEditBookClicked = () => {
    if (title && author && bookReference) {
      dispatch(bookUpdated({ id: bookId, title, author, bookReference }));
      history.push(`/books/${bookId}`);
    }
  };

  const canAdd = Boolean(title) && Boolean(author) && Boolean(bookReference);

  return (
    <div className="container col-4">
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
          onClick={onEditBookClicked}
          disabled={!canAdd}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditBookForm;
