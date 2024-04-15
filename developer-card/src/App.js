import "./styles.css";
import skills from "./componants/skills";
import Avatar from "./componants/avatar";
import Skill from "./componants/skill";
import Info from "./componants/info";

function App() {
  return (
    <div className="card">
      <Avatar />
      <Info
        _name="Sara Jonas"
        description="Full stack developer with experence in webdesigns.I like travelling,food and relaxing."
      />

      <div className="skill-list">
        {skills.map((skill) => (
          <Skill skillObject={skill} key={skills.key} />
        ))}
      </div>
    </div>
  );
}

// function SkillList() {
//   return (
//     <div className="skill-list">
//       <Skill skills="cs+html 👌" color="green" />
//       <Skill skills="Js,Java ✌️" color="blue" />
//       <Skill skills="React 👌" color="red" />
//     </div>
//   );
// }

export default App;
