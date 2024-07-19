import "./Seller.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState } from "react";
import axios from 'axios';

const Seller =()=>{

    const [data,setData]=useState({
        sellerName:"me",
        Name:"",
        author:"",
        caption:"",
        Img:"",
        Price:"",
        initialAvl:"",
        currAvl:0
      })

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          console.log(data)
    
          const url=`http://localhost:8080/api/add-products/`;
          const { data: res } = await axios.post(url, data);
    
          console.log(res.message)
         // await axios.put();
          alert('Upload Successful.');
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
      };




    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
      };


    return (
        <>
        <Navbar/>
        <p id="sName">Seller : palak gupta</p>
        <form id="spForm" onSubmit={handleSubmit}>
            <div id="scForm">
                <label>Book's Name :</label>
                <input type="text" placeholder="Enter the book's name" onChange={handleChange} name="Name" value={data.Name} required/>
            </div>
            <div id="scForm">
                <label>Author Name :</label>
                <input type="text" placeholder="Enter the book's name" onChange={handleChange} name="author" value={data.author} required/>
            </div>

            <div id="scForm">
                <label>Price :</label>
                <input type="text" placeholder="Enter Real Price " onChange={handleChange} name="Price" value={data.Price} required/>
            </div>
            <div id="scForm">
                <label>Image Link:</label>
                <input type="text" placeholder="Enter Selling Price" onChange={handleChange} name="Img" value={data.Img} required/>
            </div>
            <div id="scForm">
                <label>Quantity :</label>
                <input type="text" placeholder="Enter quantity" onChange={handleChange} name="initialAvl" value={data.initialAvl}/>
            </div>
            <div id="scForm">
                <label id="sDesc">Description :</label>
                <textarea placeholder="Description" onChange={handleChange} name="caption" value={data.caption}></textarea>
            </div>
            <div id="sBtn">
                <button >Upload</button>
            </div>
        </form>
        <Footer/>
        </>
    )
}
export default Seller;