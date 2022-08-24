import '../styles/globals.css'
// import "../Component/Header"
import { Navbar } from '../Component/Header'
import Footer from '../Component/Footer'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <div>
    <Navbar />
    <Component {...pageProps}/>
    <Footer/>
    </div>
    </>
  ) 
}

export default MyApp
