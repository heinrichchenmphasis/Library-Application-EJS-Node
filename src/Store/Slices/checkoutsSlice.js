import { createSlice } from "@reduxjs/toolkit";

const checkoutsSlice = createSlice({
  name: "checkouts",
  initialState: {
    currentId: 4,
    list: [
      { bookId: 1, userId: 1, period: "2020-09-08", id: 1 },
      { bookId: 2, userId: 2, period: "2020-09-08", id: 2 },
      { bookId: 3, userId: 3, period: "2020-09-08", id: 3 },
    ],
  },
  reducers: {
    checkoutAdded(state, action) {
      let { bookId, userId, period } = action.payload;

      state.list.push({
        bookId: bookId,
        userId: userId,
        period: period,
        id: state.currentId,
      });
      state.currentId++;
    },
    checkoutUpdated(state, action) {
      const { bookId, userId, period, id } = action.payload;
      const existingCheckout = state.list.find((checkout) => checkout.id == id);

      if (existingCheckout) {
        existingCheckout.bookId = bookId;
        existingCheckout.userId = userId;
        existingCheckout.period = period;
      }
    },
    checkoutDeleted(state, action) {
      const { id } = action.payload;

      let index = state.list.findIndex((checkout) => checkout.id == id);
      if (index !== -1) {
        state.list.splice(index, 1);
      }
    },
  },
});

export const {
  checkoutAdded,
  checkoutUpdated,
  checkoutDeleted,
} = checkoutsSlice.actions;

export default checkoutsSlice.reducer;
