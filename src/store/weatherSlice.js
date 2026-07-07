import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWeather } from "../api";

export const getWeatherThunk = createAsyncThunk(
  "weather/getWeatherThunk",
  async (options, thunkAPI) => {
    try {
      const response = await getWeather(options);
      console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: null,
    error: null,
    isPending: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeatherThunk.pending, (state) => {
      state.isPending = true;
      state.error = null;
    });
    builder.addCase(getWeatherThunk.fulfilled, (state, action) => {
      state.isPending = false;
      state.weather = action.payload;
      state.error = null;
    });
    builder.addCase(getWeatherThunk.rejected, (state, action) => {
      state.isPending = false;
      state.error = action.payload;
    });
  },
});

export default weatherSlice.reducer;
