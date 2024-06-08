import react from "react";
import "./Signup.css";
import { Link} from "react-router-dom";


const Signup=()=>{
    return(
        <>
        <div id="parent" >
            <div id="child" >
            <div id="login"  >
            <h1>SignUp</h1>
                <p id="inpuTit">Username : </p>
                <div id="inpuDiv">
                <i id="icon" class="fa fa-user" ></i>
                    <input  type="text" id="uname"  placeholder="Enter Username "/>
                </div>
                <p id="inpuTit">Email : </p>
                <div id="inpuDiv">
                    <i id="icon" class="fa fa-envelope-o"></i>
                    <input type="email" id="email" placeholder="Enter your email "/>
                </div>
                <p id="inpuTit">Password : </p>
                <div id="inpuDiv">
                    <i id="icon" class="fa fa-lock"></i>
                    <input type="password" id="pass" placeholder="Enter your password" />
                    <i class="fa fa-eye" onClick={EyeFunc1} id="oEyes"></i>

                </div>
                <br/>
                <div id="btnDiv"><button onClick={FormValidation} id="otpBtn" >Send Otp</button></div>
                <span id="FV"></span>
                <p id="sgn">Already Registered ?&emsp;<Link to="/" id="sgnL">Log in</Link></p>
            
            <div id="otpParent" style={{display:"none"}}>
                <div id="otpDiv">
                    <i class="fa fa-envelope-o"></i>
                    <input type="number"  placeholder="Enter the Otp "/>
                    <br/>
                </div><br/>
                <div id="btnDiv"><Link to="/mainpage"><button  id="otpBtn" >Sign Up</button></Link></div>
                <p id="sgn" onClick={Show}><Link  id="sgnL">Go Back</Link></p>

            </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Signup;


/*function Hide()
{
    document.getElementById("otpBtn").style.display="none";
    document.getElementById("sgn").style.display="none";
    var a=document.querySelectorAll("#inpuDiv");
    for(let i=0;i<a.length;i++)
    {
        a[i].style.display="none";
    }
    var b=document.querySelectorAll("#inpuTit");
    for(let i=0;i<b.length;i++)
    {
        b[i].style.display="none";
    }
    var c=document.querySelectorAll("#icon");
    for (let i=0;i<c.length-1;i++)
    {
        c[i].style.margin="15px";
    }
    c[c.length-1].style.margin="10px";
    document.getElementById("otpParent").style.display="grid";
    return false;
}*/


function Show()
{
    document.getElementById("otpBtn").style.display="grid";
    document.getElementById("sgn").style.display="grid";
    var a=document.querySelectorAll("#inpuDiv");
    for(let i=0;i<a.length;i++)
    {
        a[i].style.display="flex";
    }
    var b=document.querySelectorAll("#inpuTit");
    for(let i=0;i<b.length;i++)
    {
        b[i].style.display="grid";
    }
    document.getElementById("otpParent").style.display="none";
    return false;
}

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


function FormValidation()
{
    var name=document.getElementById('uname').value;
    var email=document.getElementById('email').value;
    var pwd=document.getElementById('pass').value;

    if (name.length<5)
    {
        document.getElementById("FV").innerHTML="Username size must be >=5"
    }
    else if(!email.match('[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}[.][a-z]+'))
    {
        document.getElementById("FV").innerHTML="Enter valid gmail."
    }
    else if(pwd.length<6)
    {
        document.getElementById("FV").innerHTML="Password size must be >=6."
    }
    else{
        document.getElementById("FV").innerHTML="";
        document.getElementById("otpBtn").style.display="none";
        document.getElementById("sgn").style.display="none";
        var a=document.querySelectorAll("#inpuDiv");
        for(let i=0;i<a.length;i++)
        {
            a[i].style.display="none";
        }
        var b=document.querySelectorAll("#inpuTit");
        for(let i=0;i<b.length;i++)
        {
            b[i].style.display="none";
        }
        var c=document.querySelectorAll("#icon");
        for (let i=0;i<c.length-1;i++)
        {
            c[i].style.margin="15px";
        }
        c[c.length-1].style.margin="10px";
        document.getElementById("otpParent").style.display="grid";
        return false;
    }
}