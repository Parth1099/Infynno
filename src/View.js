import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

export function View({ editdata, seteditdata, update, apidata, setapidata }) {
  let { id } = useParams();
  const [emp, setEmployee] = useState([]);

  console.log(id);

 
  const fetchdata = async () => {
    const url = `https://reqres.in/api/users/${id}`;
    const res = await axios.get(url);
    const data = res.data;
    const newdata = data.data;
    console.log(newdata);
    setEmployee(newdata);
   
  };

  useEffect(() => {

    console.log("is update", update);
    if (update) {
      console.log("Apidata",apidata);
      const newData1 = apidata.filter((data) => {
        if (data.id == id) {
          return data;
        }
      });
      console.log("View data",newData1)
      setEmployee(...newData1);
    } 
    else {
      fetchdata();
    }
  }, []);

  return (
    <>
      {/* <p>{emp.id}</p>
    <p>{emp.email}</p> */}
      <Box sx={{ width: 400, m: "auto", mt: 20, fontFamily: "monospace" }}>
        <Card
          sx={{
            maxWidth: 345,
            border: "2px solid grey",
            boxShadow: "5px 5px 20px 10px grey",
            p: "20px",
            borderRadius: "20px",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={emp.avatar}
            alt="green iguana"
            sx={{ height: 200, width: 200, borderRadius: 50, m: "auto" }}
          />
          <CardContent align="center">
            <h3>{emp?.id && emp.id}</h3>
            <h2>{emp.email}</h2>
            {emp.first_name}
            {emp.last_name}
            {/* <Typography gutterBottom variant="h5" component="div">
        
         {emp.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {emp.first_name}
          {emp.last_name}
        </Typography> */}
            <CardContent>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Button variant="contained">Back</Button>{" "}
              </Link>
            </CardContent>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

// export  Employee;
