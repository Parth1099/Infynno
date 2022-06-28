import React, { useEffect, useState } from "react";

export default function Login(props) {
  const initialValue = { username: " ", password: " " };
  const [formValues, setFormValues] = useState(initialValue);
  const [formError, setFormError] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // log
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // setFormError(validate(formValues));
    let check = validate(formValues);
    // console.log(check);

    if (check) {
      alert(
        "UserName " + formValues.username + "\nPassword :" + formValues.password
      );
      // console.log(formValues);
    }
  };

  const validate = (value) => {
    const error = {
      username: "",
      password: "",
    };
    // if(!value.username || !value.password){
    // const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    // if (!value.username || !value.password) {
    //   error = "Please Fill all data";
    // }
    // console.log( "length",value.username.length);
    // console.log("value", value.username);

    if (value.username.trim() == "") {
      console.log("blsnk");
      console.log("value", value.username);

      console.log(value.username.trim());
      error.username = "UserName is Required";
    }
    if (!value.password) {
      error.password = "Password is Required";
    }
    if (value.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    }

    setFormError({ ...error });

    // console.log(error);

    // else if(value.password.length > 10)
    // {
    //   error.password ="Password must be less than 10 characters";
    // }
    // return false;
    return error;
    // }
  };
  function changeSignup() {
    props.setData(true);
  }

  return (
    <>
      <div className="maindiv">
        <div className="container main">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6 m-auto">
              {/* <pre>{JSON.stringify(formValues,undefined,2)}</pre> */}

              <div className="card mt-5">
                <div className="card-body">
                  <div
                    className="heading text-center"
                    style={{ margin: "0xp 50%" }}
                  >
                    <h2>Sign In</h2>
                    <svg
                      // style={{ margin: "0px 160px" }}
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

                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      onChange={handleChange}
                      value={formValues.username}
                      className="form-control my-4 py-2"
                    />{" "}
                    <p style={{ color: "red" }}>{formError.username}</p>
                    <input
                      type="text"
                      placeholder="Password"
                      name="password"
                      value={formValues.password}
                      onChange={handleChange}
                      className="form-control my-4 py-2"
                    />
                    <p style={{ color: "red" }}>{formError.password}</p>
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Remember me
                        </label>
                        <a href="#" style={{ float: "right" }} className="">
                          Forgot Password ?
                        </a>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <button className="btn btn-primary btn-block">
                        SUBMIT
                      </button>
                      <a
                        href="#"
                        onClick={() => changeSignup()}
                        className="nav-link"
                      >
                        Don't Have a Account ? SignUp
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
