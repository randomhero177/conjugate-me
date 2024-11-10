// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import selectedVerbsReducer from "../features/selectedVerbsSlice";

const store = configureStore({
  reducer: {
    selectedVerbs: selectedVerbsReducer,
  },
});

export default store;
