import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url, api_token } from "../Config.js";

const initialState = {
  matchdata: [],
  matchfinished: [],
  upcoming: [],
  isLoading: false,
  message: "",
};

export const fetchData = createAsyncThunk("matchNew/fetch", () => {
  const url = `${base_url}${api_token}&include=localteam,visitorteam,season,runs,league`;
  try {
    const response = axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const homeSlice = createSlice({
  name: "matchNew",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.matchdata = action.payload.data.data.slice(2, 12);

        state.matchfinished = action.payload.data.data.filter((datafinish) =>
          datafinish.live ? "" : datafinish
        );

        state.upcoming = action.payload.data.data.filter((dataupcome) => {
          if (dataupcome.status === "Aban.") {
            return dataupcome;
          }
        });
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.message = "something went wrong";
        console.log(action);
      });
  },
});

export default homeSlice.reducer;

