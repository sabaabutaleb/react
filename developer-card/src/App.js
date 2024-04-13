import logo from "./logo.svg";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro
          _name="Sara Jonas"
          description="Full stack developer with experence in webdesigns."
        />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="profile picture.jpg" alt="Sara Jonas" />;
}
function Intro(props) {
  return (
    <div>
      <h2>{props._name} </h2>
      <p>{props.description} </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skills="cs+html 👌" color="green" />
      <Skill skills="Js,Java ✌️" color="blue" />
      <Skill skills="React 👌" color="red" />
    </div>
  );
}

function Skill(props) {
  // const red="backgroundColor:red";
  // const blue="backgroundColor:blue";
  // const green ="backgroundColor:green";
  return (
    <div style={{ backgroundColor: props.color }} className="skill">
      {" "}
      <span>{props.skills}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default App;
