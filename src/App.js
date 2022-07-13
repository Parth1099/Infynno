import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Moviedetails from "./Component/Moviedetails";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Moviedetailsmain from "./Component/Moviedetailsmain";
import Sidebar from "./Component/Sidebar/Sidebar";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Navbar/>
      <Sidebar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/moviedetails/:id" exact element={<Moviedetailsmain />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
