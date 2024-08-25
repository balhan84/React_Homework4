import { NavLink } from "react-router-dom";
import styles from "./Header.module.sass";

const linkStyle = ({ isActive }) =>
  isActive ? { border: "2px solid green" } : {};

function Header() {
  return (
    <header>
      <h1 className={styles.title}>My Page</h1>
      <nav>
        <ul className={styles.navMenu}>
          <li>
            <NavLink className={styles.menuItem} to="/" style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.menuItem} to="about" style={linkStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.menuItem}
              to="/contacts"
              style={linkStyle}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
