import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const UserList = (props) => {
  const items = useSelector((state) => state.users.list);

  const renderedItems = items.map((item) => (
    <button
      key={item.id}
      className="list-group-item list-group-item-action"
      onClick={props.onClick(item.id)}
    >
      {item.firstName} {item.lastName}
    </button>
  ));

  return <div className="list-group">{renderedItems}</div>;
};

export default UserList;
