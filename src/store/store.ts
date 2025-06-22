// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import selectedVerbsReducer from "@/features/selectedVerbsSlice";
import selectedTensesReducer from "@/features/selectedTensesSlice";

const store = configureStore({
  reducer: {
    selectedVerbs: selectedVerbsReducer,
    selectedTenses: selectedTensesReducer,
  },
});

export default store;
