// features/selectedTensesSlice.js
import { createSlice } from "@reduxjs/toolkit";

interface SelectedTensesState {
  selectedTenses: string[];
}

const initialState: SelectedTensesState = {
  selectedTenses: [],
};

const selectedTensesSlice = createSlice({
  name: "selectedTenses",
  initialState,
  reducers: {
    setSelectedTenses: (state, action) => {
      state.selectedTenses = action.payload;
    },
    addTense: (state, action) => {
      if (!state.selectedTenses.includes(action.payload)) {
        state.selectedTenses.push(action.payload);
      }
    },
    removeTense: (state, action) => {
      state.selectedTenses = state.selectedTenses.filter(
        (tense) => tense !== action.payload,
      );
    },
  },
});

export const { setSelectedTenses, addTense, removeTense } =
  selectedTensesSlice.actions;
export default selectedTensesSlice.reducer;
