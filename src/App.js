import {Employee} from "./employee";
import { View } from "./View";
import { Edit } from "./edit"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [edit, seteditdata] = useState({});
  const [apidata, setapidata] = useState([]);
  const [update, setupdate] = useState(false);

  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" exact  element={<Employee {...{ edit, seteditdata, apidata, setapidata, update, setupdate }} />}></Route>
          <Route path="/emp_id/:id" exact element={<View/>}></Route>
          <Route path="/edit/:id" exact element={<Edit {...{ edit, seteditdata, apidata, setapidata, update, setupdate }}/>}></Route>
          <Route path="*" element={<div>Error Page</div>}></Route>


        </Routes>
      </BrowserRouter>   
    );
}

export default App;
