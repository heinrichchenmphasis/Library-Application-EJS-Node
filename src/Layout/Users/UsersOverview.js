import React from "react";
import UserList from "../../Cells/Lists/UserList";
import AddUserForm from "../../Cells/Forms/AddUserForm.js";
import { useHistory } from "react-router-dom";

export const UsersOverview = () => {
  const history = useHistory();

  return (
    <div className="container py-3">
      <h2>Users</h2>
      <div className="row justify-content-between py-3">
        <div className="col-5">
          <UserList onClick={(id) => () => handleClick(id)} />
        </div>
        <div className="col-5">
          <AddUserForm />
        </div>
      </div>
    </div>
  );

  function handleClick(id) {
    history.push(`/users/${id}`);
  }
};

export default UsersOverview;
