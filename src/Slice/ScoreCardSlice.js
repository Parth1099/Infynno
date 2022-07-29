import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url, api_token, all_include } from "../Config.js";

const initialState = {
  score: [],
  localscore: [],
  visitorscore: [],
  localbat: [],
  visitorbat: [],
  localbow: [],
  visitorbow: [],
  localextra: [],
  visitorextra: [],
  isLoading: false,
  message: " ",
};

export const fetchScoreData = createAsyncThunk("matchNew/fetchScore", (id) => {
  const url = base_url + "/" + id + api_token + "&" + all_include;
  try {
    const response = axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const ScoreCardSlice = createSlice({
  name: "matchNew",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchScoreData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchScoreData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.score = action.payload.data.data;
        // LocalTeam Score
        state.localscore = action.payload.data.data.runs.filter((datalocal) => {
          if (action.payload.data.data.localteam_id === datalocal.team_id) {
            return datalocal;
          }
        })[0];

        //   Visitor Team Score
        state.visitorscore = action.payload.data.data.runs.filter(
          (datalocal) => {
            if (action.payload.data.data.visitorteam_id === datalocal.team_id) {
              return datalocal;
            }
          }
        )[0];

        //   Local Bat
        state.localbat = action.payload.data.data.batting.filter(
          (localbatdata) => {
            if (
              action.payload.data.data.localteam.id === localbatdata.team_id
            ) {
              return localbatdata;
            }
          }
        );

        // Visitor Bat
        state.visitorbat = action.payload.data.data.batting.filter(
          (localbatdata) => {
            if (
              action.payload.data.data.visitorteam.id === localbatdata.team_id
            ) {
              return localbatdata;
            }
          }
        );

        // LocalTeam Bowler Filter
        state.localbow = action.payload.data.data.bowling.filter((localbw) => {
          if (action.payload.data.data.visitorteam.id === localbw.team_id) {
            return localbw;
          }
        });

        //   Visitor team Bowler
        state.visitorbow = action.payload.data.data.bowling.filter(
          (localbw) => {
            if (action.payload.data.data.localteam.id === localbw.team_id) {
              return localbw;
            }
          }
        );

        // Local Extra
        state.localextra = action.payload.data.data.scoreboards?.filter(
          (ex) => {
            if (action.payload.data.data.localteam.id === ex.team_id) {
              return ex;
            }
          }
        )[0];

        //visitor Extra
        state.visitorextra = action.payload.data.data.scoreboards.filter(
          (ex) => {
            if (action.payload.data.data.visitorteam.id === ex.team_id) {
              return ex;
            }
          }
        )[0];
      })
      .addCase(fetchScoreData.rejected, (state, action) => {
        state.isLoading = false;
        state.message = "something went wrong";
        console.log(action);
      });
  },
});

export default ScoreCardSlice.reducer;
