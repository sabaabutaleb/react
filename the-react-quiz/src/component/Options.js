function Options({ question, dispatch, answer }) {
  const hasAnswer = answer !== null;
  return (
    <div>
      <ul className="options">
        {question.options.map((option, i) => (
          <button
            className={`btn btn-option ${i === answer ? "answer" : ""} ${
              hasAnswer
                ? question.correctOption === i
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={hasAnswer}
            onClick={() => {
              dispatch({ type: "newAnswer", payload: i });
            }}
          >
            {option}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default Options;
