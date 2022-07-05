import React from "react";
import axios from "axios";
import { Link, NavLink, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Button,
  ButtonBase,
} from "@mui/material";

export function Employee({
  seteditdata,

  apidata,
  setapidata,
}) {
  const [emp, setEmployee] = useState([]);

  function removeFun(tid) {
    setapidata(
      apidata.filter((val) => {
        if (val.id !== tid) {
          return val;
        }
      })
    );
  }

  function editFun(tid) {
    console.log(tid);
  }

  return (
    <Box
      sx={{
        m: "auto",
        width: 800,
        mt: 5,
        textAlign: "center",
        fontFamily: "initial",
        boxShadow: "2px 2px 8px 8px grey",
      }}
    >
      <Link to={"/addform"}>
        <Button variant="contained" sx={{ mr: "700px", mt: 2 }}>
          Add Data
        </Button>
      </Link>
      <TableContainer>
        <h1>Employee Data </h1>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align="center">Action</TableCell>
              {/* <TableCell>Delete</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {apidata.length == 0 ? (
              <p>No record</p>
            ) : (
              apidata?.map((data, index) => {
                return (
                  <TableRow key={index}>
                    {/* <Link to={`/employee/${emp_id.id}`} /> */}
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.first_name}</TableCell>
                    <TableCell>{data.last_name}</TableCell>
                    <TableCell align="center">
                      <Link
                        to={`/emp_id/${data.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ mr: 2 }}
                        >
                          View
                        </Button>
                      </Link>

                      <Link
                        to={`/edit/${data.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          color="secondary"
                          sx={{ mr: 2 }}
                          onClick={() => {
                            seteditdata({ ...data });
                          }}
                        >
                          Edit
                        </Button>
                      </Link>

                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => removeFun(data.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
