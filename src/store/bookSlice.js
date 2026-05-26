import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBooks } from "../api";

export const getBooksThunk = createAsyncThunk(
  "books/getBooksThunk",
  async (options, thunkAPI) => {
    try {
      const response = await getAllBooks(options);
      return response.data.data;
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
