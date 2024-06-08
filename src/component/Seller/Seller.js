import "./Seller.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Seller =()=>{
    return (
        <>
        <Navbar/>
        <p id="sName">Seller : palak gupta</p>
        <div id="spForm">
            <div id="scForm">
                <label>Book's Name :</label>
                <input type="text" placeholder="Enter the book's name"/>
            </div>
            <div id="scForm">
                <label>Author Name :</label>
                <input type="text" placeholder="Enter the book's name"/>
            </div>

            <div id="scForm">
                <label>Real Price :</label>
                <input type="text" placeholder="Enter Real Price "/>
            </div>
            <div id="scForm">
                <label>Selling Price :</label>
                <input type="text" placeholder="Enter Selling Price"/>
            </div>
            <div id="scForm">
                <label>Quantity :</label>
                <input type="text" placeholder="Enter quantity"/>
            </div>
            <div id="scForm">
                <label>Cover Photo :</label>
                <input type="file"/>
            </div>
            <div id="scForm">
                <label id="sDesc">Description :</label>
                <textarea placeholder="Description"></textarea>
            </div>
        </div>
        <div id="sBtn">        
            <button onClick={()=>{alert("Uploaded")}} >Upload</button>
        </div>
        <Footer/>
        </>
    )
}
export default Seller;