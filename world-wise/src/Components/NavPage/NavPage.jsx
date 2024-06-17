import { Link, NavLink } from "react-router-dom";
import styles from "./NavPage.module.css";
import Logo from "../Logo/Logo";
function NavPage() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="Pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="Product">Product</NavLink>
        </li>
        {/* <li>
          <NavLink to="./*">PageNotFound</NavLink>
        </li> */}
        <li>
          <NavLink to="Login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavPage;
