import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./Address.css"
const Address=()=>{
    return(
        <>
        <Navbar/>
        <div id="APdiv">
            <h1>Add New Address</h1><br/><br/>
            <div id="ACdiv">
                <textarea></textarea>
                <Link><button>Add New Address</button></Link>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Address;