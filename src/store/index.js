import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./bookSlice";
import weatherReducer from "./weatherSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    weather: weatherReducer,
  },
});

export default store;
