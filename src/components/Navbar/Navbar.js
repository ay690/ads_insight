import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className="logo">
        <h3>APP LOGO</h3>
      </div>

      <ul>
        <li href="#">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            DASHBOARD
          </Link>
        </li>
        <li href="#">
          <Link
            to="/checkform"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            CREATE ADS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
