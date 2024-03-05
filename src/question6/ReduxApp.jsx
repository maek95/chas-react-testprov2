// 6. Fråga och Svar med Redux Toolkit 3p
// Skapa en applikation med två komponenter: QuestionComponent och AnswerComponent.
//Använd Redux Toolkit för att hantera en fråga som ställs i QuestionComponent och
// sedan svaras på i AnswerComponent.

// State: Skapa en store och en questionSlice som hanterar en fråga och ett svar.
// questionSlice ska innehålla tillstånd för question (en sträng) och answer
// (en sträng), med actions för att sätta en ny fråga och svara på den.

// QuestionComponent: Ska visa ett inputfält där användaren kan skriva in en
// fråga. När frågan skickas (t.ex. genom att trycka på en knapp), ska frågan
// lagras i Redux store med hjälp av den action som definieras i questionSlice.

// AnswerComponent: Ska visa ett inputfält och en knapp för att svara
// på frågan. När svaret skickas, ska det också lagras i Redux store och visas
// under inputfältet.
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store.jsx";
import { addAnswer, addQuestion } from "./QuestionSlice.jsx";
import { useState } from "react";

function QuestionComponent() {
  const dispatch = useDispatch();

  const [input, setInput] = useState('')

  return (
    <div>
        <input value={input} onChange={(e) => {
          setInput(e.target.value)
          dispatch(addQuestion(e.target.value))
        }} placeholder="add question" type="text" />
    </div>
  )
}

function AnswerComponent() {

  const dispatch = useDispatch();
  const [input, setInput] = useState('')

  return (
    <div>
      <input value={input} onChange={(e) => {
          setInput(e.target.value)
        dispatch(addAnswer(e.target.value))
      }} placeholder="answer here" type="text" />
    </div>
  )
}

export default function ReduxApp() {
  const question = useSelector((state) => state.questionsanswers.question
  )

  const answer = useSelector((state) => state.questionsanswers.answer
  )

  return (<>
  <Provider store={store}>
    <div>
      <QuestionComponent></QuestionComponent>
      <AnswerComponent></AnswerComponent>

      {question ? (<p>question: {question}</p>) : ""}
      {answer ? (<p>answer: {answer}</p>) : ""}
    </div>
    
  </Provider>
  </>

  );
}
