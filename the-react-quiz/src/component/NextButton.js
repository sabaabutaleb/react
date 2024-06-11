function NextButton({ dispatch, answer, index, numOfQuestions }) {
  if (answer === null) return null;
  if (index < numOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "displayNextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish test
      </button>
    );
}

export default NextButton;
