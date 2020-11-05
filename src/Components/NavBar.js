import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  //   const [active, setActive] = useState(false);

  // const OnSubmit = () =>{
  //     setActive(true)
  // }
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Patricia
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                //   onClick={() => {
                //     setActive(true);
                //   }}
                className="nav-link"
                to="/sign-up"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;