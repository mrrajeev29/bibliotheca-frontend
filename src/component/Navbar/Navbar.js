import { Component, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import axios from 'axios';

window.onresize=function()
{
   // alert(window.innerWidth)
   //document.getElementById("nMAin").style.width=window.innerWidth+"px"
    if(window.innerWidth>=900)
    {
        document.getElementById("navbar").style.display="flex";
        document.getElementById("i1").style.display="none"
        document.getElementById("i2").style.display="none"
    }
    else{
        document.getElementById("navbar").style.display="none";     
        document.getElementById("bar").className="fas fa-bars";   
    }
}
onscroll=function()
{
    //alert(6)
    if(window.innerWidth<=900){
        document.getElementById("bar").className="fas fa-bars";   

    document.getElementById("navbar").style.display="none";     
    }
}
const Navbar=()=>{


    const [user, setUser] = useState([]);
	const email = localStorage.getItem("email");
	const getUserDetail=async()=>{
	  try{
		  const {data}=await axios.get(`http://localhost:8080/api/details/${email}`);
			  setUser(data);
              localStorage.setItem('UserName',user.Name);
  
	  }catch(error){
		  console.log(error);
  }}
	  getUserDetail();


	 const handleLogout = () => {
		localStorage.removeItem("token");
        localStorage.removeItem("email");
	};

    return(
        <>
          <nav id="nMAin">
            <a href="#">
                <svg id="logo-15" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" class="ccustom" fill="#17CF97">
                </path> <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" class="ccustom" fill="#17CF97"></path> 
                <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" class="ccustom" fill="#17CF97"></path> 
                <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" class="ccustom" fill="#17CF97"></path> 
                </svg></a>

            <div>
                <ul id="navbar" >
                    <li id="i1" style={{display:"none"}}>
                        <Link to="/profile"> Hi, {user.Name}</Link>
                    </li>
                    <li>
                        <Link className=""
                        to="/mainpage">
                            Home</Link>
                    </li>
                    <li>
                        <Link to="/yourbasket">Basket</Link>
                    </li>
                    <li>
                    <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/sell">Sell</Link>
                     </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li id="i2" style={{display:"none"}}>
                        <Link to="/" onClick={handleLogout}>Logout</Link>
                    </li>
                    <li>
                        <div >
                            <ul id="navbar">
                                <li><Link to="/profile">Hi, {user.Name}</Link></li>
                                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div id="mobile">
                <i onClick={toggle}  className="fas fa-bars" id="bar"></i>
            </div>
          </nav>
        </>
    )
}

export default Navbar
function toggle()
{
    if(document.getElementById("bar").className==="fas fa-times")
    {
        document.getElementById("bar").className="fas fa-bars";
        document.getElementById("navbar").style.display="none"
        document.getElementById("i1").style.display="none"
        document.getElementById("i2").style.display="none"
    }
    else{
        document.getElementById("bar").className="fas fa-times"
        document.getElementById("navbar").style.display="flex"
        document.getElementById("i1").style.display="flex"
        document.getElementById("i2").style.display="flex"

    }
}
