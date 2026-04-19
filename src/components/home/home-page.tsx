import type React from "react";
import { Link } from "react-router-dom";
import { routesApp } from "../../router/interface-routes";
import "./home.home.styles.scss";

const HomePage: React.FC = () => {
  return (
    <div className="rootHome">
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to={routesApp.signupForm}>Signup Form</Link>
          </li>
          <br />
          <li>
            <Link to={routesApp.form3d}>Room Form</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
