import "./Loader.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Loader=()=>{
    return(
        <>
        <Navbar/>
        <div className="loader"></div>
        <Footer/>
        </>
    )
}
export default Loader;