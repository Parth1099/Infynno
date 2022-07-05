import { Employee } from "./employee";
import { View } from "./View";
import { Edit } from "./edit";
import axios from "axios";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Addform from "./addform";

function App() {
  const [apidata, setapidata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const url = "https://reqres.in/api/users";
      const res = await axios.get(url);
      const data = res.data;
      const newdata = data.data;
      console.log(newdata);

      setapidata(newdata);
    };

    if (apidata.length == 0) {
      fetchdata();
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact  element={<Addform/>}></Route> */}
        <Route
          path="/"
          exact
          element={<Employee {...{ apidata, setapidata }} />}
        ></Route>
        <Route
          path="/emp_id/:id"
          exact
          element={<View {...{ apidata, setapidata }} />}
        ></Route>
        <Route
          path="/edit/:id"
          exact
          element={<Edit {...{ apidata, setapidata }} />}
        ></Route>
        <Route
          path="/addform"
          exact
          element={<Edit {...{ apidata, setapidata }} />}
        ></Route>
        <Route path="*" element={<div>Error Page</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
