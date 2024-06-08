import react from "react";
import "./Login.css";
import { Link} from "react-router-dom";

 
const Login=()=>{
    return(
        <>
        <div id="parent" >
            <form id="child">
            <div id="login" >
                <h1>Login</h1>
                <p>Email : </p>
                <div id="inpuDiv">
                    <i id="icon" class="fa fa-envelope-o"></i>
                    <input type="email"  placeholder="Enter your email " required/>
                </div>
                <p>Password : </p>
                <div id="inpuDiv">
                <i class="fa fa-lock" aria-hidden="true"></i>
                    <input id="pass" type="password" placeholder="Enter your password" required />
                    <i class="fa fa-eye" onClick={EyeFunc1}  id="oEyes"></i>
                </div>
                <br/><br/>
                <div id="btnDiv"><Link to="/mainpage"><button  >Login</button></Link></div>
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