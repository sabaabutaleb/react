function Progress({
  index,
  numOfQuestions,
  totalPoints,
  questions,
  correctAnswer,
  answer,
  maxPoints,
}) {
  return (
    <>
      <header className="progress">
        <progress
          max={questions.length}
          value={index + Number(answer !== null)}
        ></progress>
        <p>
          Questions <strong>{index + 1}</strong>/{numOfQuestions}
        </p>
        <p>
          <strong>
            {correctAnswer
              ? questions[index].points + totalPoints
              : totalPoints}
          </strong>
          /{maxPoints} Points
        </p>
      </header>
    </>
  );
}

export default Progress;
