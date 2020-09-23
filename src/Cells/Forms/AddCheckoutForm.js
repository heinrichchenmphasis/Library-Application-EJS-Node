import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { checkoutAdded } from "../../Store/Slices/checkoutsSlice";

export const AddCheckoutForm = (props) => {
  const bookId = props.bookId;
  const userId = props.userId;
  const period = props.period;

  const canAdd = Boolean(bookId) && Boolean(userId) && Boolean(period);

  return (
    <form>
      <div className="form-group">
        <label htmlFor="bookId">Book ID</label>
        <input
          type="text"
          className="form-control"
          id="bookId"
          placeholder="Enter book ID"
          value={bookId}
          onChange={props.onBookIdChanged}
        />
      </div>
      <div className="form-group">
        <label htmlFor="userId">User ID</label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter user ID"
          value={userId}
          onChange={props.onUserIdChanged}
        />
      </div>
      <div className="form-group">
        <label htmlFor="period">Period</label>
        <input
          type="date"
          className="form-control"
          id="period"
          value={period}
          onChange={props.onPeriodChanged}
        />
      </div>
      <button
        type="button"
        onClick={props.onAddCheckoutClicked}
        disabled={!canAdd}
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default AddCheckoutForm;
