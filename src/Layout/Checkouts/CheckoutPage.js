import React from "react";
import { useHistory } from "react-router-dom";
import { checkoutDeleted } from "../../Store/Slices/checkoutsSlice";
import { useDispatch, useSelector } from "react-redux";

export const CheckoutPage = ({ match }) => {
  const { checkoutId } = match.params;
  const books = useSelector((state) => state.books.list);
  const users = useSelector((state) => state.users.list);

  const checkout = useSelector((state) =>
    state.checkouts.list.find((checkout) => checkout.id == checkoutId)
  );

  const dispatch = useDispatch();
  const history = useHistory();

  if (!checkout) {
    return (
      <section>
        <h2>Checkout not found!</h2>
      </section>
    );
  }

  return (
    <div>
      <div>
        {getBook(books, checkout.bookId).title} checked out by{" "}
        {getUser(users, checkout.userId).firstName}
      </div>

      <button class="btn btn-primary mx-1" onClick={editCheckout}>
        Edit
      </button>
      <button class="btn btn-danger mx-1" onClick={deleteCheckout}>
        Delete
      </button>
    </div>
  );

  function editCheckout() {
    history.push(`/editCheckout/${checkout.id}`);
  }

  function deleteCheckout() {
    dispatch(checkoutDeleted({ id: checkoutId }));
    history.push(`/checkouts`);
  }

  function getUser(list, id) {
    return list.find((user) => user.id == id);
  }

  function getBook(list, id) {
    return list.find((book) => book.id == id);
  }
};
