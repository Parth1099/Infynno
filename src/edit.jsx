import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { Link, useParams, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

export function Edit({ apidata, setapidata }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const editData = (value) => {
    const newData = apidata.map((data) => {
      if (data.id == id) {
        return { ...value };
      } else {
        return data;
      }
    });

    setapidata(newData);
  };

  useEffect(() => {
    if (location.pathname.match("/addform")) {
      // console.log("add mode")
    } else {
      // console.log("edit mode")
    }
  });

  const loginSchema = Yup.object({
    first_name: Yup.string()
      .min(2, "Must be more than 2 char")
      .max(10, "Must be 10 characters or less")
      .required("First Name Required"),
    last_name: Yup.string()
      .min(2, "Must be more than 2 char")
      .max(10, "Must be 20 characters or less")
      .required("Last Name Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  return (
    <>
      <>{/* <input type="text" value={edit.email} /> */}</>
      <Box sx={{ width: 500, m: "auto", mt: 15 }}>
      
        <Formik
          initialValues={{
            email: !id ? "" : apidata[id - 1].email,
            first_name: !id ? "" : apidata[id - 1].first_name,
            last_name: !id ? "" : apidata[id - 1].last_name,
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            console.log(values, ":hi");

            if (location.pathname.match("/addform")) {
              setapidata([
                ...apidata,
                { id: apidata[apidata.length - 1].id + 1, ...values },
              ]);
              navigate("/");
            } else {
              editData(values);
              navigate("/");
            }
          }}
        >
          {({ errors, touched }) => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <h2>Add</h2>
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  width: "40%",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    width: "80%",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1px",
                      width: "50%",
                    }}
                  >
                    <Field
                      placeHolder="First name"
                      variant="outlined"
                      name="first_name"
                      type="text"
                    />
                    {touched.first_name && errors.first_name ? (
                      <div style={{ color: "red" }}>{errors.first_name}</div>
                    ) : null}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1px",
                      width: "50%",
                    }}
                  >
                    <Field
                      placeHolder="Last name"
                      variant="outlined"
                      name="last_name"
                      type="text"
                    />
                    {touched.last_name && errors.last_name ? (
                      <div style={{ color: "red" }}>{errors.last_name}</div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  width: "40%",
                  alignItems: "center",
                }}
              >
                <div>
                  <Field
                    placeHolder="Email"
                    variant="outlined"
                    style={{ width: "400px" }}
                    type="text"
                    name="email"
                  />
                  {touched.email && errors.email ? (
                    <div style={{ color: "red" }}>{errors.email}</div>
                  ) : null}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  width: "30%",
                  justifyContent: "center",
                }}
              >
                <Button variant="contained" type="submit">
                  Add
                </Button>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <Button variant="contained" color="error">
                    cancel
                  </Button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
}

// export  Employee;
