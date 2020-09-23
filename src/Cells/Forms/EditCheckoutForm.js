import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { checkoutUpdated } from "../../Store/Slices/checkoutsSlice";

export const EditCheckoutForm = ({ match }) => {
  const { checkoutId } = match.params;
  const checkout = useSelector((state) =>
    state.checkouts.list.find((checkout) => checkout.id == checkoutId)
  );
  const [bookId, setBookId] = useState(checkout.bookId);
  const [userId, setUserId] = useState(checkout.userId);
  const [period, setPeriod] = useState(checkout.period);

  const onBookIdChanged = (e) => setBookId(e.target.value);
  const onUserIdChanged = (e) => setUserId(e.target.value);
  const onPeriodChanged = (e) => setPeriod(e.target.value);

  const dispatch = useDispatch();
  const history = useHistory();

  const canAdd = Boolean(bookId) && Boolean(userId) && Boolean(period);

  const onEditCheckoutClicked = () => {
    if (bookId && userId && period) {
      dispatch(checkoutUpdated({ id: checkoutId, bookId, userId, period }));
      history.push(`/checkouts/${checkoutId}`);
    }
  };

  return (
    <div className="container col-4">
      <form>
        <div className="form-group">
          <label htmlFor="bookId">Book ID</label>
          <input
            type="text"
            className="form-control"
            id="bookId"
            placeholder="Enter book ID"
            value={bookId}
            onChange={onBookIdChanged}
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
            onChange={onUserIdChanged}
          />
        </div>
        <div className="form-group">
          <label htmlFor="period">Period</label>
          <input
            type="date"
            className="form-control"
            id="period"
            value={period}
            onChange={onPeriodChanged}
          />
        </div>
        <button
          type="button"
          onClick={onEditCheckoutClicked}
          disabled={!canAdd}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditCheckoutForm;
