import "./History.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"
const History = () => {
    return (
        <>
        <Navbar/>
            <div className="order-history">
                <div className="container1">
                <div className="sidebar1">
                    <div className="profile1">
                        <div className="avatar1"></div>
                        <p>Hello, Kalpana Raj</p>
                    </div>
                    <div className="menu1">
                        <Link to="/mainpage" ><button>Home</button></Link>
                        <Link to="/orderhistory"><button>My Orders</button></Link>

                        <Link to="/yourbasket"><button>Basket</button></Link>
                        <Link id="Sbtn"><button>Coupons</button></Link>
                        <Link to="/"><button>Logout</button></Link>
                    </div>
                </div>
                </div>
                <div className="orders">
                    <p className="heading" style={{textAlign:"center",color:"white"}}>My Order History</p>
                    <div className="order">
                        <div className="order-info">
                            <p>Deliver by Mon, 11 June 2024</p>
                            <div className="order-details">
                                <div className="image-section">
                                    <div className="thumbnail-a">
                                        <img className="thumbnail" src="https://www.cengage.com/covers/imageServlet?image_type=LRGFC&catalog=cengage&epi=36773094918742522091049498331432346312" alt="Product" />
                                    </div>
                                </div>
                                <div className="details-section">
                                    <h1 className="product-name">Cengage College Algebra</h1>
                                    <h4>Gustafson Hughes</h4>
                                    <div className="price">
                                        <span className="original-price">₹700</span>
                                    </div>
                                </div>
                            </div>
                            <p>Exchange/Return available before 16 June, 2024</p>
                        </div>
                        <FeedbackSection />
                        <div className="order-summary">
                            <h3>Order Summary</h3>
                            <p>Total Items: 1</p>
                            <p>Total Price: ₹700</p>
                            <button className="reorder-button">Reorder</button>
                        </div>
                    </div>
                    <div className="order">
                        <div className="order-info">
                            <p>Delivered on Mon, 6 June 2024</p>
                            <div className="order-details">
                                <div className="image-section">
                                    <div className="thumbnail-a">
                                        <img className="thumbnail" src="https://www.cengage.com/covers/imageServlet?image_type=LRGFC&catalog=cengage&epi=36773094918742522091049498331432346312" alt="Product" />
                                    </div>
                                </div>
                                <div className="details-section">
                                    <h1 className="product-name">Cengage College Algebra</h1>
                                    <h4>Gustafson Hughes</h4>
                                    <div className="price">
                                        <span className="original-price">₹700</span>
                                    </div>
                                </div>
                            </div>
                            <p>Exchange/Return available before 16 June, 2024</p>
                        </div>
                        <FeedbackSection />
                        <div className="order-summary">
                            <h3>Order Summary</h3>
                            <p>Total Items: 1</p>
                            <p>Total Price: ₹700</p>
                            <button className="reorder-button">Reorder</button>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </>
    );
};

const FeedbackSection = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);
    };

    return (
        <div className="feedback">
            <StarRating rating={rating} handleRating={handleRating} />
            <textarea className="feedback-area" placeholder="Write your feedback here..."></textarea>
            <button onClick={()=>{alert("Thanks for your feedback")}} className="feedback-button">Give Feedback</button>
        </div>
    );
};

const StarRating = ({ rating, handleRating }) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <span
                        key={index}
                        className={`star ${ratingValue <= rating ? 'filled' : ''}`}
                        onClick={() => handleRating(ratingValue)}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
};

export default History;
