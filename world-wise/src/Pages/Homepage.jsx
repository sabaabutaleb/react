import styles from "./Homepage.module.css";
import NavPage from "../Components/NavPage/NavPage";
import { Link } from "react-router-dom";
// import "../index.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <NavPage />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="App" className="cta">
          Lets start
        </Link>
      </section>
    </main>
  );
}
