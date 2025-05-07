// features/selectedVerbsSlice.js
import { createSlice } from "@reduxjs/toolkit";

interface SelectedVerbsState {
  selectedVerbs: string[];
}

const initialState: SelectedVerbsState = {
  selectedVerbs: [],
};

const selectedVerbsSlice = createSlice({
  name: "selectedVerbs",
  initialState,
  reducers: {
    setSelectedVerbs: (state, action) => {
      state.selectedVerbs = action.payload;
    },
    addVerb: (state, action) => {
      if (!state.selectedVerbs.includes(action.payload)) {
        state.selectedVerbs.push(action.payload);
      }
    },
    removeVerb: (state, action) => {
      state.selectedVerbs = state.selectedVerbs.filter(
        (verb) => verb !== action.payload,
      );
    },
  },
});

export const { setSelectedVerbs, addVerb, removeVerb } =
  selectedVerbsSlice.actions;
export default selectedVerbsSlice.reducer;
