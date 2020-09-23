import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./Slices/booksSlice";
import userReducer from "./Slices/usersSlice";
import checkoutReducer from "./Slices/checkoutsSlice";

export default configureStore({
  reducer: {
    books: bookReducer,
    users: userReducer,
    checkouts: checkoutReducer,
  },
});
