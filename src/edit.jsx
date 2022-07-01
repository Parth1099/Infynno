import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { ButtonGroup, FormGroup, Grid, TextField } from "@mui/material";

import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import {
  Button,
  FormLabel,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";

export function Edit() {
  let { id } = useParams();
  const [emp, setEmployee] = useState([]);

  console.log(id);
  useEffect(() => {
    const fetchdata = async () => {
      const url = `https://reqres.in/api/users/${id}`;
      const res = await axios.get(url);
      const data = res.data;
      const newdata = data.data;
      console.log(newdata);
      setEmployee(newdata);
    };
    fetchdata();
  }, []);

  return (
    <>
           
      <Box sx={{ width: 500, m: "auto" , mt :15 }}>
            <h1>Edit Form</h1>
        <form  style={{display : "flex" ,flexDirection : "column" , gap : 20}}>
          <TextField id="" label="First Name" fullWidth value={emp.first_name} autoFocus="auto"/>
  
          <TextField id="" label="Last Name"  fullWidth value={emp.last_name} />

          <TextField id="" label="Email"  fullWidth value={emp.email} />

          <Button variant="contained" color="primary">
            Update
          </Button>
        </form>
      </Box>
    </>
  );
}

// export  Employee;
