import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const CheckoutList = () => {
  const checkouts = useSelector((state) => state.checkouts.list);
  const books = useSelector((state) => state.books.list);
  const users = useSelector((state) => state.users.list);

  const renderedItems = checkouts.map((item) => (
    <button key={item.id}>
      <Link
        to={`/checkouts/${item.id}`}
        className="list-group-item list-group-item-action"
      >
        {getBookTitle(books, item.bookId)} checked out by{" "}
        {getUserFirstName(users, item.userId)}
      </Link>
    </button>
  ));

  function getUserFirstName(list, id) {
    let user = list.find((user) => user.id == id);
    if (user) {
      return user.firstName;
    }
    return "User Not Found";
  }

  function getBookTitle(list, id) {
    let book = list.find((book) => book.id == id);
    if (book) {
      return book.title;
    }
    return "Book Not Found";
  }

  return <div className="list-group">{renderedItems}</div>;
};

export default CheckoutList;
