import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { ButtonGroup, FormGroup, Grid, TextField } from "@mui/material";

import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

export function Edit({
  edit,
  setedit,
  apidata,
  setapidata,
  update,
  setupdate,
}) {
  const [formdata, setformdata] = useState({});
  const [first_name, setFirst_name] = useState("");

  let navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    //  console.log(name);
    setformdata({ ...formdata, [name]: value });
  }

  async function submitdata(e) {
    const newdata = apidata.map((data) => {
      if (data.id === edit.id) {
        return formdata;
      } else {
        return data;
      }
    });

    setapidata(newdata);
    setupdate(true);
    // navigator
    console.log("new data", newdata);
    navigate("/");
  }

  console.log("editdata", edit);
  useEffect(() => {
    setformdata(edit);
  }, []);
  return (
    <>
      <>
        <input type="text" value={edit.email} />
      </>
      <Box sx={{ width: 500, m: "auto", mt: 15 }}>
        <h1>Edit Form</h1>
        <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <TextField
            id=""
            fullWidth
            value={formdata.id}
            onChange={handleChange}
          />

          <TextField
            id=""
            fullWidth
            value={formdata.first_name}
            onChange={handleChange}
            name="first_name"
          />

          <TextField id="" fullWidth value={formdata.email} />

          <Button variant="contained" color="primary" onClick={()=>submitdata()}>
            Update
          </Button>
        </form>
      </Box>
    </>
  );
}

// export  Employee;
