import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./mainpage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import axios from "axios";

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

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [product, setProduct] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const getUserDetail = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`https://bibliotheca-backend.onrender.com/api/all/`);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getUserDetail();
  }, []);

  const handleAddToCart = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1
    }));
  };

  const handleIncrease = (id, available) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.min((prevQuantities[id] || 0) + 1, available)
    }));
  };

  const handleDecrease = (id) => {
    if (quantities[id] > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1
      }));
    }
  };

  return (
    <>
      <Navbar />

      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for books..."
        />
        <button className="search-button">Search</button>
      </div>

      <div id="pCard">
        {loading ? (
          <Loader />
        ) : (
          product &&
          product
            .filter((book) => {
              return search.toLowerCase() === ''
                ? book
                : book?.Name.toLowerCase().includes(search.toLowerCase()) ||
                  book?.author.toLowerCase().includes(search.toLowerCase()) ||
                  book?.caption.toLowerCase().includes(search.toLowerCase());
            })
            .map((book) => (
              <>
                <br />
                <div id="cCard" key={book.id} onMouseEnter={() => Show(book.id)} onMouseLeave={() => Hide(book.id)}>
                  <span id="br"></span>
                  <div id="Details">
                    <img id="bookImg" src={book.Img} alt={book.Name} />
                    <div id="bDetails">
                      <br />
                      <Link style={{ textDecoration: "none" }} to="/details" state={book}>
                        <h2>{book.Name}</h2>
                      </Link>
                      <h4>{book.author}</h4>
                      <ReadMore id="desc">{book.caption}</ReadMore>
                    </div>
                    <div id="purchase">
                      <h3>
                        Available: {book.initialAvl - (quantities[book.id] || 0)}/{book.initialAvl}
                      </h3>
                      <br />
                      {quantities[book.id] > 0 ? (
                        <div className="quantity-container" id="atc">
                          <button className="quantity-button" onClick={() => handleDecrease(book.id)}>-</button>
                          <span value={quantities[book.id]} id="quant">
                            {quantities[book.id]}
                          </span>
                          <button
                            className="quantity-button"
                            onClick={() => handleIncrease(book.id, book.initialAvl)}
                            disabled={quantities[book.id] >= book.initialAvl}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button className="add-button" onClick={() => handleAddToCart(book.id)}>
                          <i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </>
            ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default MainPage;

function Show(i) {
  var a = document.querySelectorAll("#bDetails");
  var b = document.querySelectorAll(".text");
  var c = document.querySelectorAll("#bookImg");
  var d = document.querySelectorAll("#cCard");

  if (window.innerWidth >= 670) {
    a[i].style.marginTop = "-2rem";
    c[i].style.width = "19%";
    c[i].style.height = "10%";
    c[i].style.marginLeft = "0rem";
    d[i].style.height = "fit-content";
    b[i].style.display = "flex";
  } else {
    b[i].style.display = "none";
  }
}

function Hide(i) {
  var a = document.querySelectorAll("#bDetails");
  var b = document.querySelectorAll(".text");
  var c = document.querySelectorAll("#bookImg");
  var e = document.querySelectorAll("#purchase");
  if (window.innerWidth >= 670) {
    a[i].style.marginTop = "2rem";
    b[i].style.display = "none";
    c[i].style.width = "190px";
    c[i].style.height = "185px";
  }
}
