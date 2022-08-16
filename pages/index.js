import Footer from "../Component/Footer";
import { Navbar } from "../Component/Header";
import Main from "../Component/Main";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className="w-[1349px]">
        <Navbar />
        <Main/>
        <Footer />
      </div>
    </>
  );
}
