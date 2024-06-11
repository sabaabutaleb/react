import { useEffect, useReducer } from "react";
import Headers from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Progress from "./Progress";
import Finish from "./Finish";
import "../index.css";
import Footer from "./Footer";
const SEC_PER_Question = 10;
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  totalPoints: 0,
  highScore: 0,
  remainingTime: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      console.log(state);
      return { ...state, questions: action.payload, status: "ready" };
    case "failed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        remainingTime: state.questions.length * SEC_PER_Question,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        totalPoints:
          question.correctOption === action.payload
            ? question.points + state.totalPoints
            : state.totalPoints,
      };
    case "displayNextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finish",
        highScore:
          state.totalPoints > state.highScore
            ? state.totalPoints
            : state.highScore,
      };
    case "reset":
      return {
        ...state,
        status: "ready",
        index: 0,
        answer: null,
        totalPoints: 0,
      };
    case "ticking":
      return {
        ...state,
        remainingTime: state.remainingTime - 1,
        status: state.remainingTime <= 0 ? "finish" : state.status,
      };
    default:
      throw new Error("Unknown action");
  }
}

export default function App() {
  useEffect(function () {
    fetch(`http://localhost:8000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch((err) =>
        dispatch({ type: "failed", payload: "some thing went wrong⛔" })
      );
  }, []);
  const [
    { questions, status, index, answer, totalPoints, highScore, remainingTime },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numOfQuestions = questions.length;
  console.log(answer);
  const maxPoints = questions.reduce(
    (previous, current) => previous + current.points,
    0
  );
  const percentage = Math.round((totalPoints / maxPoints) * 100);
  return (
    <div className="app">
      <Headers />
      <Main>
        <Progress
          index={index}
          numOfQuestions={numOfQuestions}
          totalPoints={totalPoints}
          questions={questions}
          answer={answer}
          maxPoints={maxPoints}
          percentage={percentage}
          //do the maxpoints with reduce funstion js.
        />
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
              questions={questions}
            />

            <Footer
              answer={answer}
              dispatch={dispatch}
              numOfQuestions={numOfQuestions}
              index={index}
              SEC_PER_Question={SEC_PER_Question}
              remainingTime={remainingTime}
            />
          </>
        )}
        {status === "finish" && (
          <Finish
            totalPoints={totalPoints}
            maxPoints={maxPoints}
            percentage={percentage}
            highScore={highScore}
            dispatch={dispatch}
            questions={questions}
          />
        )}
        {status === "reset" && (
          <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
        )}
      </Main>
    </div>
  );
}
