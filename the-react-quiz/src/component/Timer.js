import { useEffect } from "react";
function Timer({ dispatch, remainingTime }) {
  let min = Math.floor(remainingTime / 60);
  min = min > 9 ? min : "0" + min;
  let sec = Math.floor(remainingTime % 60);
  sec = sec > 9 ? sec : "0" + sec;
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: "ticking" });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);
  return (
    <div className="timer">
      <div>
        {remainingTime >= 0 ? `${min}:${sec}` : dispatch({ type: "finish" })}
      </div>
    </div>
  );
}

export default Timer;
