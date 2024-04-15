import React from "react";

function Info(props) {
  return (
    <div className="data">
      <h2>{props._name} </h2>
      <p>{props.description} </p>
    </div>
  );
}

export default Info;
