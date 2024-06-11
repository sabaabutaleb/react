function StartScreen({ numOfQuestions, dispatch }) {
  return (
    <div className="start">
      <h3>{numOfQuestions} Questions in this quiz.</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
