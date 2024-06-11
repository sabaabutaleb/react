function Finish({
  totalPoints,
  maxPoints,
  percentage,
  highScore,
  dispatch,
  questions,
}) {
  return (
    <>
      <div className="result">
        <p>
          You scored {totalPoints} points out of {maxPoints} ({percentage})%
        </p>
      </div>
      <p className="highscore">High score: {highScore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset", payload: questions })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default Finish;
