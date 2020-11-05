import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { showNav: true };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      showNav: !this.state.showNav,
    });
  }

  render() {
    const { showNav } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Patricia
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={(showNav ? "show" : "") + " collapse navbar-collapse"}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {this.props.isActive ? "Log out" : "Login"}
                </Link>
              </li>
              <li className="nav-item">
                {!this.props.isActive && (
                  <Link className="nav-link" to="/sign-up">
                    Sign up
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
