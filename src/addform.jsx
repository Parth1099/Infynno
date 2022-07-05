import React from "react";
import { Formik, Form, Field } from "formik";
import "./style.css";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Addform({ edit,
  setedit,
  apidata,
  setapidata,
  update,
  setupdate}) {
    const navigate = useNavigate();
    setupdate(true)
    console.log(update + "From Add form")

  const schema = Yup.object().shape({
    fname: Yup.string()
      .required("This field is required")
      .min(2, "Must be more than 2 char"),
    lname: Yup.string()
      .required("This field is required")
      .min(2, "Must be more than 2 char"),
    email: Yup.string().required("This Field is required").email(),
  });

  return (
    <div>
      <section className="" style={{marginTop : "100px" ,marginLeft : "300px"}}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3" >
          <div className="container h-100" >
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Add Employee
                    </h2>
                    <Formik
                      initialValues={{
                        fname: "",
                        lname: "",
                        email: "",
                      }}
                      validationSchema={schema}
                      onSubmit={(values) => {
                        // console.log(values);
                        // debugger;
                        setapidata([...apidata,{id : apidata.length + 1 ,email : values.email , first_name : values.fname,last_name :values.lname}])
                        console.log(apidata)
                        navigate("/");
                      }}
                    >
                      {({ errors, touched }) => (
                        <Form>
                          <div className="form-outline mb-4">
                            <Field
                              type="text"
                              id="form3Example1cg"
                              className="form-control form-control-lg"
                              name="fname"
                              placeHolder=" First Name"
                            />
                            {errors.fname && touched.fname ? (
                              <div style={{ color: "red" }}>{errors.fname}</div>
                            ) : null}
                         
                          </div>
                          <br></br>
                          <div className="form-outline mb-4">
                            <Field
                              type="text"
                              id="form3Example3cg"
                              placeHolder="Last Name"
                              className="form-control form-control-lg"
                              name="lname"
                            />
                            {errors.fname && touched.fname ? (
                              <div style={{ color: "red" }}>{errors.fname}</div>
                            ) : null}
                         
                          </div>
                          <br></br>

                          <div className="form-outline mb-4">
                            <Field
                              type="text"
                              placeHolder="Email"
                              id="form3Example4cg"
                              className="form-control form-control-lg"
                              name="email"
                            />
                            {errors.email && touched.email ? (
                              <div style={{ color: "red" }}>{errors.email}</div>
                            ) : null}
                      
                          </div>
                          <br></br>

                          <div className="d-flex justify-content-center">
                            <button
                              type="submit"
                              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                            >
                              Add
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
