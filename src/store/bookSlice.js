import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBooksThunk = createAsyncThunk(
  "books/getBooksThunk",
  async (options, thunkAPI) => {
    try {
      const response = await fetch("https://fakerapi.it/api/v2/books");
      const data = await response.json();
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
const bookSlice = createSlice({
  name: "books",
  initialState: { books: [], error: null, isPending: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooksThunk.pending, (state) => {
      state.isPending = true;
      state.error = null;
    });
    builder.addCase(getBooksThunk.fulfilled, (state, action) => {
      state.isPending = false;
      state.books = action.payload;
      state.error = null;
    });
    builder.addCase(getBooksThunk.rejected, (state, action) => {
      state.isPending = false;
      state.error = action.payload;
    });
  },
});

export default bookSlice.reducer;
