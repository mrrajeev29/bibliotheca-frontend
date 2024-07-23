import react, { useState } from "react";
import "./Login.css";
import { Link} from "react-router-dom";
import axios from 'axios';

 
const Login=()=>{

    const [error, setError] = useState("");


    const [data,setData]=useState({
        email:"",
        password:""
    })

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url = "http://localhost:8080/api/login/";
          const { data: res } = await axios.post(url, data);
          localStorage.setItem("token", res.data);
          localStorage.setItem("email", data.email);
    
          window.location = "/mainpage";
        //  alert(res.data)
        } catch (error) {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            setError(error.response.data.message);
          }
        }
      };
    


    return(
        <>
        <div id="parent" >
            <form id="child" onSubmit={handleSubmit}>
            <div id="login" >
                <h1>Login</h1>
                <p>Email : </p>
                <div id="inpuDiv">
                    <i id="icon" class="fa fa-envelope-o"></i>
                    <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="Enter your email " required/>
                </div>
                <p>Password : </p>
                <div id="inpuDiv">
                <i class="fa fa-lock" aria-hidden="true"></i>
                    <input id="pass" type="password" name="password" value={data.password} onChange={handleChange} placeholder="Enter your password" required />
                    <i class="fa fa-eye" onClick={EyeFunc1}  id="oEyes"></i>
                </div>
                <br/><br/>
                <p>{error}</p>
                <div id="btnDiv"><button  >Login</button></div>
                <p id="sgn">New User ?&emsp;<Link to="signup" id="sgnL">SignUp</Link></p>
            </div>
            </form>
        </div>
        </>
    )
}
export default Login;

var show=true;
function EyeFunc1()
{
    if (show)
    {
        document.getElementById("oEyes").className="fa fa-eye-slash"
        document.getElementById("pass").type="text";
        show=false;
    }
    else
    {
        document.getElementById("oEyes").className="fa fa-eye"
        document.getElementById("pass").type="password";
        show=true;
    }
}