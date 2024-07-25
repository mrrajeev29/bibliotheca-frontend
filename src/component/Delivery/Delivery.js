import "./Delivery.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Delivery = () => {
    const location = useLocation();
    const data = location.state;

    const pq = parseInt(localStorage.getItem("pQuant"), 10) || 1;
    const add = localStorage.getItem("address");
    const email = localStorage.getItem("email");
    const navigate=useNavigate();

    const codRef = useRef(null);

    const address = () => {
        toast("This payment option is not available for this product...");
    }

    const handleRemove = async (id) => {
        try {
            await axios.put(`https://bibliotheca-backend.onrender.com/api/remove-product/${email}/${id}`);
        } catch (error) {
            console.log(error);
        }
    };

    const Confirm = async(id) => {
        if (codRef.current && codRef.current.checked) {
            try {
                await axios.put(`https://bibliotheca-backend.onrender.com/api/buy-product/${email}/${id}/${pq}`);
            } catch (error) {
                console.log(error);
            }
            handleRemove(id);
            navigate("/confirmed")
        } else {
            toast("Please select a payment option....");
        }
    }

    return (
        <>
            <Navbar />
            <ToastContainer />
            <div className="containerO">
                <div className="main-contentO">
                    <div className="stepO" id="choose-addressO">
                        <hr />
                        <h2>Step 1 | Choose Address</h2>
                        <button className="address-btnO" onClick={() => { toast("To change the details go to profile section...") }}>{add}</button>
                        <button className="add-address-btnO" onClick={() => { toast("To change the details go to profile section...") }}>+ update address</button>
                    </div>

                    <div className="stepO" id="order-summaryO">
                        <hr />
                        <h2>Step 2 | Order Summary</h2>
                        <div className="order-detailsO">
                            <div className="image-sectionO">
                                <div className="thumbnail-aO">
                                    <img className="thumbnailO" src={data.Img} alt="product" />
                                </div>
                            </div>
                            <div className="details-sectionO">
                                <h1 className="product-nameO">{data.Name}</h1>
                                <h4>{data.author}</h4>
                                <div className="priceO">
                                    <span className="original-priceO">₹{data.Price}</span>
                                    <span className="discount-priceO">₹{parseInt(0.7 * data.Price)}</span>
                                    <span className="discountO">30% off</span>
                                </div>
                                <div className="quantity-sectionO">
                                    <div className="quantityO">
                                        <b>Total Quantity: {pq}</b>
                                    </div>
                                    <p>&emsp;<b>Delivery by Thu Jun 6</b></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="stepO" id="payment-optionsO">
                        <hr />
                        <h2>Step 3 | Payment Options</h2>
                        <div className="payment-optionO">
                            <input type="radio" id="upiO" name="payment" value="upi" disabled />
                            <label htmlFor="upiO" onClick={address} style={{ cursor: "pointer" }}>UPI</label>
                        </div>
                        <div className="payment-optionO">
                            <input type="radio" id="cardO" name="payment" value="card" disabled />
                            <label htmlFor="cardO" onClick={address} style={{ cursor: "pointer" }}>Credit / Debit / ATM Card</label>
                        </div>
                        <div className="payment-optionO">
                            <input type="radio" id="net-bankingO" name="payment" value="net-banking" disabled />
                            <label htmlFor="net-bankingO" onClick={address} style={{ cursor: "pointer" }}>Net Banking</label>
                        </div>
                        <div className="payment-optionO">
                            <input type="radio" id="codO" name="payment" value="cod" ref={codRef} />
                            <label htmlFor="codO" style={{ cursor: "pointer" }}>Cash on Delivery</label>
                        </div>
                    </div>
                </div>

                <div className="price-detailsO">
                    <h2>Price Details</h2>
                    <div className="price-itemO">
                        <span>Price (1 item)</span>
                        <span>₹{parseInt(0.7 * data.Price)}</span>
                    </div>
                    <div className="price-itemO">
                        <span>Delivery Charges</span>
                        <span>₹40 <span className="free"></span></span>
                    </div>
                    <hr />
                    <div className="price-item totalO">
                        <span>Total Payable :&emsp;</span>
                        <span>₹{parseInt(0.7 * data.Price) * pq + 40} (total : {pq} items)</span>
                    </div>
                        <button className="pay-btnO" onClick={() => Confirm(data.id)}>Place Order</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Delivery;
