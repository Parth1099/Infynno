import {Employee} from "./employee";
import { View } from "./View";
import { Edit } from "./edit"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      // <>
      //   <Employee/>
      // </>   
      <BrowserRouter>
        <Routes>
          <Route path="/" exact  element={<Employee/>}></Route>
          <Route path="/emp_id/:id" exact element={<View/>}></Route>
          <Route path="/edit/:id" exact element={<Edit/>}></Route>
          <Route path="*" element={<div>Error Page</div>}></Route>


        </Routes>
      </BrowserRouter>   
    );
}

export default App;
