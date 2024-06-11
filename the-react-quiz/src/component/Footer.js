import NextButton from "./NextButton";
import Timer from "./Timer";
function Footer({ dispatch, answer, numOfQuestions, index, remainingTime }) {
  return (
    <div className="progress">
      <Timer dispatch={dispatch} remainingTime={remainingTime} />
      <NextButton
        dispatch={dispatch}
        answer={answer}
        numOfQuestions={numOfQuestions}
        index={index}
      />
    </div>
  );
}

export default Footer;
