// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import selectedVerbsReducer from "@/store/modules/selectedVerbsSlice";
import selectedTensesReducer from "@/store/modules/selectedTensesSlice";

const store = configureStore({
  reducer: {
    selectedVerbs: selectedVerbsReducer,
    selectedTenses: selectedTensesReducer,
  },
});

export default store;
