import React from "react";

function Skill({ skillObject }) {
  return (
    <div style={{ backgroundColor: skillObject.color }} className="skill  ">
      <p>
        {skillObject.skill} {""}
        {skillObject.level === "advanced" && "💪"}
        {skillObject.level === "intermediate" && "👌"}
        {skillObject.level === "beginner" && "😒"}
      </p>
    </div>
  );
}
export default Skill;
