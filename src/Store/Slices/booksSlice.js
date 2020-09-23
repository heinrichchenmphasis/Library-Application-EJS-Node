import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    currentId: 5,
    list: [
      {
        title: "Ulysses",
        author: "James Joyce",
        bookReference: "111112",
        id: 1,
      },
      {
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        bookReference: "111113",
        id: 2,
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        bookReference: "111114",
        id: 3,
      },
      {
        title: "In Search of Lost Time",
        author: "Marcel Proust",
        bookReference: "111111",
        id: 4,
      },
    ],
  },
  reducers: {
    bookAdded(state, action) {
      const { title, author, bookReference } = action.payload;
      state.list.push({
        title: title,
        author: author,
        bookReference: bookReference,
        id: state.currentId,
      });
      state.currentId++;
    },
    bookUpdated(state, action) {
      const { title, author, bookReference, id } = action.payload;
      const existingBook = state.list.find((book) => book.id == id);

      if (existingBook) {
        existingBook.title = title;
        existingBook.author = author;
        existingBook.bookReference = bookReference;
      }
    },
    bookDeleted(state, action) {
      const { id } = action.payload;

      let index = state.list.findIndex((book) => book.id == id);

      if (index !== -1) {
        state.list.splice(index, 1);
      }
    },
  },
});

export const { bookAdded, bookUpdated, bookDeleted } = booksSlice.actions;

export default booksSlice.reducer;
