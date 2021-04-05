import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link to="/register">
          <p className="f3 link dim black underline pa3 pointer">Register</p>
        </Link>
      </nav>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="">
              <Link to="/main">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign in"
                />
              </Link>
            </div>
            <div className="lh-copy mt3">
              <Link to="/register">
                <p className="f6 link dim black db pointer">Register</p>
              </Link>
            </div>
          </div>
        </main>
      </article>
    </div>
  );
};

export default Signin;
