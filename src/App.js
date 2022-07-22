import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Slidernew from "./Component/Slider";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Scorecard from "./Component/Scorecard";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
        

         <Navbar />
              <Routes>
                <Route path="/" exact element={<Slidernew/>} ></Route>
                <Route path="/scoredetails/:id" exact element={<Scorecard/>} ></Route>
              </Routes>
         <Footer/>
     
    </>
  );
}

export default App;
