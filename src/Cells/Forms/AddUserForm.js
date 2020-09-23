import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userAdded } from "../../Store/Slices/usersSlice";

export const AddUserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

  const onFirstNameChanged = (e) => setFirstName(e.target.value);
  const onLastNameChanged = (e) => setLastName(e.target.value);

  const onAddUserClicked = () => {
    if (firstName && lastName) {
      dispatch(userAdded({ firstName, lastName }));
      setFirstName("");
      setLastName("");
    }
  };

  const canAdd = Boolean(firstName) && Boolean(lastName);

  return (
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
        onClick={onAddUserClicked}
        disabled={!canAdd}
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default AddUserForm;
