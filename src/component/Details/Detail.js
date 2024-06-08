import "./Detail.css";
import { Link,useLocation} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import React, { useState } from "react";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";

const ReadMore = ({ children }) => {
	const text = children;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	return (
		<p className="text1">
			{isReadMore ? text.slice(0, 100) : text}
			<span
				onClick={toggleReadMore}
				className="read-or-hide1"
				style={{ color: "red"}}
			>
				{isReadMore ? "...read more" : " show less"}
			</span>
		</p>
	);
}; 


const Detail= () => {
    const location = useLocation();
    const data = location.state;
    //alert(data.price)
    //alert(props.name)
  const [quantity, setQuantity] = useState(data.quantity);

  const changeQuantity = (type) => {
    if(data.available-data.quantity==0 && type=="increase")
        {
            alert("Not Availabel.")
        }
    if (type === 'increase') {
        if(data.available-data.quantity>0)
            {
                data.available--;
                setQuantity(quantity + 1);
            }
    } else if (type === 'decrease' && quantity > 0) {
        data.available++
      setQuantity(quantity - 1);
    }
  }; 
  return (
    <>
    <Navbar/>
    <div class="container2">
      <div class="image-section5">
        <div class="thumbnail-a5">
          <img class="thumbnail5" src={data.img} />
        </div>
      </div>
      <div class="details-section">
        <h1 class="product-name">{data.title}</h1>
        <h4 style={{color:"white"}} >{data.author}</h4>
        <div class="price">
          <span class="discount-price">₹{0.7*data.price}</span>
          <span class="original-price">₹{data.price}</span>
          <span class="discount">30% off</span>
        </div>
        <p class="stock">In stock: Dispatch in 5 working days</p>
        <p>Stock Left : {data.available-data.quantity}</p>
        <div class="quantity">
          <button onClick={() => changeQuantity('decrease')}>-</button>
          <span>{quantity}</span>
          <button onClick={() => changeQuantity('increase')}>+</button>
        </div>
        <button class="button-add">Add to Cart</button>
         <Link to="/order" state={data}><button class="button-buy" >Buy Now</button></Link>
        <div className="delivery">
          <span>Eligible for Delivery?</span>
          <p>Enter pincode:&emsp;<input type="number"/> <Link id="a1" to="">Check</Link></p>
          <p>Get it by 4th June</p>
        </div>
        <br></br>
        <div class="coupon">
          <p>Have Coupons? <Link id="a1">Apply</Link></p>
        </div>
      </div>
    </div>
    <div class="description2">
    <h1>Product Description</h1>
    <p>{data.title}</p>
    <ReadMore>{data.description}</ReadMore>
    </div>
    <Footer/>
    </>
    
  );
};
    

export default Detail;