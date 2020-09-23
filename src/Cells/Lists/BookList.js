import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const BookList = (props) => {
  const items = useSelector((state) => state.books.list);

  const renderedItems = items.map((item) => (
    <button
      key={item.id}
      className="list-group-item list-group-item-action"
      onClick={props.onClick(item.id)}
    >
      {item.title} by {item.author}
    </button>
  ));

  return <div className="list-group">{renderedItems}</div>;
};

export default BookList;
