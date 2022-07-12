import Cards from "./Component/Cards";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home.jsx/Home";
import Moviewatch from "./Component/moviewatch";
import Navbar from "./Component/Navbar/Navbar";


function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     {/* <Cards/> */}
     <Moviewatch type={"popular"} title={"MOVIES YOU MUST WATCH"}/>
     <Moviewatch type={"285/similar"} title={"RECOMMENDED FOR YOU"}/>
     <Moviewatch type={"top_rated"} title={"BOLLYWOOD  CLASSICS"}/>
  
     <Footer/>
    </>
  );
}

export default App;
