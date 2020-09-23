import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userUpdated } from "../../Store/Slices/usersSlice";
import { useHistory } from "react-router-dom";

export const EditUserForm = ({ match }) => {
  const { userId } = match.params;
  const user = useSelector((state) =>
    state.users.list.find((user) => user.id == userId)
  );

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const dispatch = useDispatch();
  const history = useHistory();

  const onFirstNameChanged = (e) => setFirstName(e.target.value);
  const onLastNameChanged = (e) => setLastName(e.target.value);

  const onEditUserClicked = () => {
    if (firstName && lastName) {
      dispatch(userUpdated({ id: userId, firstName, lastName }));
      history.push(`/users/${userId}`);
    }
  };

  const canAdd = Boolean(firstName) && Boolean(lastName);

  return (
    <div className="container col-4">
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Enter first name"
            value={firstName}
            onChange={onFirstNameChanged}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Enter last name"
            value={lastName}
            onChange={onLastNameChanged}
          />
        </div>
        <button
          type="button"
          onClick={onEditUserClicked}
          disabled={!canAdd}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;
