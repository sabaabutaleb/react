import { useState } from "react";

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];
function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

function Tabbed({ content }) {
  const [active, setActive] = useState(0);
  return (
    <>
      <div
        className="tabs"
        onClick={(e) => {
          setActive(Number(e.target.name));
        }}
      >
        <Tab num={1} active={active} />
        <Tab num={2} active={active} />
        <Tab num={3} active={active} />
        <Tab num={4} active={active} />
      </div>
      {active <= 2 ? (
        <Content
          content={content}
          active={active}
          key={content[active].summary}
        />
      ) : (
        <DifferentTab />
      )}
    </>
  );
}
function Tab({ num, active }) {
  return (
    <button
      className={active === num - 1 ? "active tab" : "tab"}
      name={num - 1}
    >
      {" "}
      Tab {num}
    </button>
  );
}
function DifferentTab() {
  return (
    <div className="tab-content">
      <h1>This is a differnet tab</h1>
    </div>
  );
}

function Content({ content, active }) {
  const [hideDetails, setHideDetails] = useState(false);
  const [likes, setLikes] = useState(0);
  function handleDetails(e) {
    e.preventDefault();
    setHideDetails((hideDetails) => !hideDetails);
  }

  return (
    <div>
      <div className="tab-content">
        <h4>{content[active].summary}</h4>
        {!hideDetails && <p>{content[active].details}</p>}
        <div className="tab-actions">
          <button onClick={(e) => handleDetails(e)}>
            {hideDetails ? "Show details" : "Hide details"}
          </button>
          <div className="hearts-counter">
            <p>{likes}👍</p>
            <button onClick={() => setLikes(likes + 1)}>+</button>
            <button>+++</button>{" "}
          </div>
        </div>
        <div className="tab-undo">
          <button>Undo</button>
          <button>Undo in 2 sec</button>
        </div>
      </div>
    </div>
  );
}

export default App;
