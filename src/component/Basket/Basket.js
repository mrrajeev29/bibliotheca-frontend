import "./Basket.css";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import axios from "axios";
import Loader from "../Loader/Loader";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text" style={{ display: "none" }}>
      {isReadMore ? text.slice(0, 100) : text}
      <span onClick={toggleReadMore} className="read-or-hide" style={{ color: "red" }}>
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const Basket = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const email = localStorage.getItem("email");

  const getUserDetail = async () => {
    try {
      const { data } = await axios.get(`https://bibliotheca-backend.onrender.com/api/details/${email}`);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://bibliotheca-backend.onrender.com/api/all/`);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUserDetail();
    getProducts();
  }, [email]);

  return (
    <>
      <Navbar />
      <div id="pCard">
        <br />
        {loading ? (
          <Loader />
        ) : (
          user && user.Basket && user.Basket.length === 0 ? (
            <>
            <h1 style={{color:"white"}}>Nothing in the basket.....</h1>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </>
          ) : (
            user &&
            user.Basket &&
            user.Basket.map((ind) => (
              <div id="cCard" key={products[ind].id}>
                <span id="br"></span>
                <div id="Details">
                  <img id="bookImg" src={products[ind].Img} alt={products[ind].Name} />
                  <div id="bDetails">
                    <br />
                    <Link style={{ textDecoration: "none" }} to="/details" state={products[ind]}>
                      <h2>{products[ind].Name}</h2>
                    </Link>
                    <h4>{products[ind].author}</h4>
                    <ReadMore id="desc">{products[ind].caption}</ReadMore>
                  </div>
                  <div id="Bpurchase">
                    <h3>Quantity : {user.purchaseQuantity[user.Basket.indexOf(ind)]}</h3>
                    <br />
                    <Link to="/details" state={products[ind]}>
                      <button className="add-button">
                        <i className="fa fa-shopping-bag" aria-hidden="true"></i> Buy Now
                      </button>
                    </Link>
                    <button className="add-button">
                      <i className="fa fa-times" aria-hidden="true"></i> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )
        )}
      </div>
      <Footer />
    </>
  );
};

export default Basket;
