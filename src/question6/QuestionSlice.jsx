import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "questionsanswers",
  initialState: {
    question: "",
    answer: "",
  },

  reducers: {
    addQuestion: (state, action) => {
      const newQuestion = action.payload; // action.payload.question
      return {...state, // behöver egentligen inte kopiera med immer
        question: newQuestion,
        }
    },
    addAnswer: (state, action) => {
      const newAnswer = action.payload;
      return {...state,
        answer: newAnswer,
      }
    },
  }
  }
)

export const { addQuestion, addAnswer } = questionSlice.actions;

export default questionSlice.reducer;