import "./Basket.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const ReadMore = ({ children }) => {
	const text = children;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	return (
		<p className="text" style={{display:"none"}}>
			{isReadMore ? text.slice(0, 100) : text}
			<span
				onClick={toggleReadMore}
				className="read-or-hide"
				style={{ color: "red"}}
			>
				{isReadMore ? "...read more" : " show less"}
			</span>
		</p>
	);
};
const data=[{
    id: 0,
    title: "Cengage College Algebra",
    author: "Gustafson Hughes",
    img: "https://www.cengage.com/covers/imageServlet?image_type=LRGFC&catalog=cengage&epi=36773094918742522091049498331432346312",
    description: "A book for aspiring engineers to prepare for JEE Main and Advanced with conceptual and coherent approach to mathematics. Learn from the author G. Tewani and access more resources...",
    available: 10,
    price: 840,
    quantity:4
}, 
{
    id: 1,
    title: "The Diary of a young girl",
    author: "Anne Frank",
    img: "https://tse1.mm.bing.net/th?id=OIP.1Q8a2ur6NLzaY7YNHDpnPwC0Es&pid=Api&P=0&h=180",
    description: "Annelies Marie Frank was a German-Dutch diarist of Jewish heritage. One of the most discussed Jewish victims of the Holocaust...",
    available: 2,
    price: 140,
    quantity:1

},{
    id: 2,
    title: "Cengage College Algebra",
    author: "Gustafson Hughes",
    img: "https://www.cengage.com/covers/imageServlet?image_type=LRGFC&catalog=cengage&epi=36773094918742522091049498331432346312",
    description: "A book for aspiring engineers to prepare for JEE Main and Advanced with conceptual and coherent approach to mathematics. Learn from the author G. Tewani and access more resources...",
    available: 10,
    price: 840,
    quantity:4
}, {
    id: 3,
    title: "Cengage College Algebra",
    author: "Gustafson Hughes",
    img: "https://www.cengage.com/covers/imageServlet?image_type=LRGFC&catalog=cengage&epi=36773094918742522091049498331432346312",
    description: "A book for aspiring engineers to prepare for JEE Main and Advanced with conceptual and coherent approach to mathematics. Learn from the author G. Tewani and access more resources...",
    available: 10,
    price: 840,
    quantity:4
}, 
]

const Basket=()=>{
    const [quantities, setQuantities] = useState({});

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
    return(
        <>
        <Navbar/>
        <div id="pCard">
                {data.map(book => (
                <>
                <br/>
                <div id="cCard" key={book.id} onMouseEnter={() => Show(book.id)} onMouseLeave={() => Hide(book.id)}>
                    <span id="br"></span>
                    <div id="Details">
                        <img id="bookImg" src={book.img} />
                        <div id="bDetails"><br/>
                            <Link style={{textDecoration:"none"}}  to="/details" state={book} ><h2>{book.title}</h2></Link>
                            <h4>{book.author}</h4>
                            <ReadMore id="desc">{book.description}</ReadMore>
                        </div>
                        <div id="Bpurchase">
                            <h3>Quantity : {book.quantity}</h3>
                            <br />
                            <Link to="/details" state={book}>
                            <button className="add-button" >
                            <i class="fa fa-shopping-bag" aria-hidden="true"></i> Buy Now
                            </button>
                            </Link>
                            <Link>
                            <button className="add-button" >
                            <i class="fa fa-times" aria-hidden="true"></i>  Remove
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                </>
            ))}
        </div>
        <Footer/>
        </>
    )
}
export default Basket;

function Show(i)
{

   // alert(i)
    var a=document.querySelectorAll("#bDetails");
    var b=document.querySelectorAll(".text");
   // var b=document.getElementsByClassName("text")
    var c=document.querySelectorAll("#bookImg");
    var d=document.querySelectorAll("#cCard");
    
   // alert(a.id)
   if(window.innerWidth>=670)
    {
    a[i].style.marginTop="-2rem";
    c[i].style.width="19%";
    c[i].style.height="10%";
    c[i].style.marginLeft="0rem";
    d[i].style.height="fit-content";
    //e[i].style.marginLeft="58rem"
            b[i].style.display="flex";

        }
    else
    {
        b[i].style.display="none";   
    }
}

function Hide(i)
{   
    var a=document.querySelectorAll("#bDetails");
    var b=document.querySelectorAll(".text");
    var c=document.querySelectorAll("#bookImg");
   // var e=document.querySelectorAll("#purchase");
    if(window.innerWidth>=670)
        {
    a[i].style.marginTop="2rem";
    b[i].style.display="none";
    c[i].style.width="190px";
    c[i].style.height="185px";
        }
    //e[i].style.marginLeft="45rem"
}