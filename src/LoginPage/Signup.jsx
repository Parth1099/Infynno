import React, { useEffect, useState } from "react";

export default function Signup(props) {
  function changeLogin() {
    props.setval(false);
  }

  return (
    <>
      <div className="maindiv">
        <div className="container main">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6 m-auto">
              <div className="card mt-5">
                <div className="card-body">
                  <div
                    className="heading text-center"
                    style={{ margin: "0xp 50%" }}
                  >
                    <h2>Sign Up Page</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      className="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                  </div>

                  <form>
                    <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      className="form-control my-4 py-2"
                    />

                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      className="form-control my-4 py-2"
                    />

                    <input
                      type="text"
                      placeholder="Password"
                      name="password"
                      className="form-control my-4 py-2"
                    />
                    <input
                      type="text"
                      placeholder="Confirm Password"
                      name="password"
                      className="form-control my-4 py-2"
                    />

               
                    <div className="text-center mt-3">
                      <button className="btn btn-primary btn-block">
                        SUBMIT
                      </button>
                      <a
                        href="#"
                        onClick={() => changeLogin()}
                        className="nav-link"
                      >
                        Already Have an Account ? Log in
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
