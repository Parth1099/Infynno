import {Employee} from "./employee";
import { View } from "./View";
import { Edit } from "./edit"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Addform from "./addform";

function App() {
  const [edit, seteditdata] = useState({});
  const [apidata, setapidata] = useState([]);
  const [update, setupdate] = useState(false);

  console.log(update + "from App")

  return (
   
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" exact  element={<Addform/>}></Route> */}
          <Route path="/" exact  element={<Employee {...{ edit, seteditdata, apidata, setapidata, update, setupdate }} />}></Route>
          <Route path="/emp_id/:id" exact element={<View {...{ edit, seteditdata, apidata, setapidata, update, setupdate }}/>}></Route>
          <Route path="/edit/:id" exact element={<Edit {...{ edit, seteditdata, apidata, setapidata, update, setupdate }}/>}></Route>
          <Route path="/addform" exact  element={<Addform {...{ edit, seteditdata, apidata, setapidata, update, setupdate }}/>}></Route>
          <Route path="*" element={<div>Error Page</div>}></Route>


        </Routes>
      </BrowserRouter>   
    );
}

export default App;
