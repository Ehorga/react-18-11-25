import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: { books: [] },
  reducers: {}
});

export default bookSlice.reducer;