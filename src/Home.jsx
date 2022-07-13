import React from "react";
// import Footer from "./Component/Footer/Footer";
import Homepage from "./Component/Homepage/Homepage";
import Moviewatch from "./Component/moviewatch";
// import Navbar from "./Component/Navbar/Navbar";

const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Homepage />
      {/* <Cards/> */}
      <Moviewatch type={"popular"} title={"MOVIES YOU MUST WATCH"} />
      <Moviewatch type={"285/similar"} title={"RECOMMENDED FOR YOU"} />
      <Moviewatch type={"top_rated"} title={"BOLLYWOOD  CLASSICS"} />

      {/* <Footer/> */}
    </>
  );
};

export default Home;
