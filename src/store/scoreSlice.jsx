import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../components/dummyData";

const initialState = {
  scores: dummyData.sort((a, b) => a.time - b.time)
};

const scoreSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {
    addScore: (state, action) => {
      state.scores.push(action.payload);
    },
    sortScores: (state) => {
      state.scores.sort((a, b) => a.time - b.time);
      if (state.scores.length > 10) {
        state.scores.pop();
      }
    }
  }
});

export const { addScore, sortScores } = scoreSlice.actions;
export default scoreSlice.reducer;