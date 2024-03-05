import { configureStore } from "@reduxjs/toolkit";

import questionReducer from "./QuestionSlice" 

export const store = configureStore({
  reducer: {
    questionsanswers: questionReducer,
  }
})
