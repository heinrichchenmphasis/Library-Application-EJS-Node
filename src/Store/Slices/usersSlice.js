import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    currentId: 5,
    list: [
      { firstName: "Amelia-Mae", lastName: "Cobb", id: 1 },
      { firstName: "Lilianna", lastName: "Bird", id: 2 },
      { firstName: "Amin", lastName: "Petty", id: 3 },
      { firstName: "Verity", lastName: "Thorpe", id: 4 },
    ],
  },
  reducers: {
    userAdded(state, action) {
      const { firstName, lastName } = action.payload;
      state.list.push({
        firstName: firstName,
        lastName: lastName,
        id: state.currentId,
      });
      state.currentId++;
    },
    userUpdated(state, action) {
      const { firstName, lastName, id } = action.payload;
      const existingUser = state.list.find((user) => user.id == id);

      if (existingUser) {
        existingUser.firstName = firstName;
        existingUser.lastName = lastName;
      }
    },
    userDeleted(state, action) {
      const { id } = action.payload;

      let index = state.list.findIndex((user) => user.id == id);
      if (index !== -1) {
        state.list.splice(index, 1);
      }
    },
  },
});

export const { userAdded, userUpdated, userDeleted } = usersSlice.actions;

export default usersSlice.reducer;
