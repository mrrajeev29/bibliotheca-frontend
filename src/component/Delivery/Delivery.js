import "./Delivery.css";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Delivery = () => {
    const location = useLocation();
    const data = location.state;
    const [quantity, setQuantity] = useState(data.quantity);
    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(0);

    const changeQuantity = (type) => {
        if (type === "increase" && data.available - quantity === 0) {
            alert("Out of Stock.");
        } else if (type === "increase" && data.available - quantity > 0) {
            setQuantity(quantity + 1);
        } else if (type === "decrease" && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const applyCoupon = () => {
        if (couponCode) {
            setDiscount(0.1);
        } else {
            alert("Please enter a valid coupon code.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="containerO">
                <div className="main-contentO">
                    <div className="stepO" id="choose-addressO">
                        <hr />
                        <h2>Step 1 | Choose Address</h2>
                        <button className="address-btnO">Vit Chennai, kelambakkam, chromepet, chennai, Tamilnadu, 600001</button>
                        <button className="address-btnO">Vit Chennai, kelambakkam, chromepet, chennai, Tamilnadu, 600001</button>
                        <Link to="/addnewaddress" style={{ textDecoration: "none" }}>
                            <button className="add-address-btnO">+ Add new address</button>
                        </Link>
                    </div>

                    <div className="stepO" id="order-summaryO">
                        <hr />
                        <h2>Step 2 | Order Summary</h2>
                        <div className="order-detailsO">
                            <div className="image-sectionO">
                                <div className="thumbnail-aO">
                                    <img className="thumbnailO" src={data.img} alt="product" />
                                </div>
                            </div>
                            <div className="details-sectionO">
                                <h1 className="product-nameO">{data.title}</h1>
                                <h4>{data.author}</h4>
                                <div className="priceO">
                                    <span className="original-priceO">₹{data.price}</span>
                                    <span className="discount-priceO">₹{0.7 * data.price}</span>
                                    <span className="discountO">30% off</span>
                                </div>
                                <div className="quantity-sectionO">
                                    <div className="quantityO">
                                        <button onClick={() => changeQuantity("decrease")}>-</button>
                                        <span>{quantity}</span>
                                        <button onClick={() => changeQuantity("increase")}>+</button>
                                    </div>
                                    <p>&emsp;<b>Delivery by Thu Jun 6</b></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="stepO" id="apply-couponO">
                        <hr />
                        <h2>Step 3 | Apply Coupon</h2>
                         <p>Have a coupon code? Apply it below.</p>
                        <div className="coupon-sectionO">
                            <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Enter coupon code"/>
                            <button onClick={applyCoupon}>Apply</button>
                        </div>
                    </div>

                    <div className="stepO" id="payment-optionsO">
                        <hr />
                        <h2>Step 4 | Payment Options</h2>
                        <div className="payment-optionO">
                            <input type="radio" id="upiO" name="payment" value="upi" />
                            <label htmlFor="upi">UPI</label>
                        </div>
                        <div className="payment-optionO">
                            <input type="radio" id="cardO" name="payment" value="card" />
                            <label htmlFor="card">Credit / Debit / ATM Card</label>
                        </div>
                        <div className="payment-optionO">
                            <input type="radio" id="net-bankingO" name="payment" value="net-banking" />
                            <label htmlFor="net-banking">Net Banking</label>
                        </div>
                        <div className="payment-optionO">
                            <input type="radio" id="codO" name="payment" value="cod" />
                            <label htmlFor="cod">Cash on Delivery</label>
                        </div>
                    </div>
                </div>

                <div className="price-detailsO">
                    <h2>Price Details</h2>
                    <div className="price-itemO">
                        <span>Price (1 item)</span>
                        <span>₹{0.7 * data.price}</span>
                    </div>
                    <div className="price-itemO">
                        <span>Delivery Charges</span>
                        <span>₹40 <span className="free"></span></span>
                    </div>
                    <div className="price-itemO">
                        <span>Coupon Discount</span>
                        <span>-₹{0.1 * 0.7 * data.price * quantity}</span>
                    </div>
                    <hr />
                    <div className="price-item totalO">
                        <span>Total Payable :&emsp;</span>
                        <span>₹{0.7 * data.price * quantity * (1 - discount) + 40} (total : {quantity} items)</span>
                    </div>
                    <Link style={{ textDecoration: "none" }} to="/confirmed">
                        <button className="pay-btnO">Place Order</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Delivery;