import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default class Login extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className=" container-fluid wrapper ">
          <div className="row">
            <div className="col d-none d-lg-block  "></div>
            <div className="col background">
              <div className="auth-inner ">
                <form className="mt-5 text-white">
                  <h3>Sign In</h3>

                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                    />
                  </div>

                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <Link
                    to="/userpage"
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Submit
                  </Link>
                  <p className="forgot-password text-right">
                    Forgot <a href="#2">password?</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
