import "./Footer.css"
import {Link} from "react-router-dom"

const Footer=()=>{
    return ( 
        <>
<footer class="footer-distributed">
        <div class="footer-left">
            <h3>ARK <span>Developer</span></h3>
            <p class="footer-links">
                <Link to="/mainpage">Home</Link>
                |                |
                <Link to="/contact">Contact</Link>
                | |
                <Link to="/faq">Faq</Link>
            </p>
        </div>
        <div class="footer-center">
            <div class="contact-item">
                <i class="fa fa-map-marker"></i>
                <p>Vit Chennai<span>Tamil Nadu</span></p>
            </div>
            <div class="contact-item">
                <i class="fa fa-phone"></i>
                <p>+91 6206409201</p>
            </div>
            <div class="contact-item">
                  <i class="fa fa-envelope"></i>
                  <p>bibliotheca.pvt.ltd@gmail.com</p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                 <span>About the company</span>
                 <strong>ARK Developer</strong> is a website where you can find 
                  many interesting and useful books.
            </p>
            <div class="footer-icons"> 
            <a href="https://github.com/mrrajeev29" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>

                <a href="https://www.facebook.com/AarabhMalhotra.29" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a target="_blank" href="https://www.instagram.com/its_mr_rajeev/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/rajeev-ranjan-9990b9226/"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a target="_blank" href="https://twitter.com/PrinceG49181050"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
            
        </div>
        
        <p class="footer-company-name">Copyright © 2024 <strong>ARKDeveloper</strong> All rights reserved</p>

    </footer>
        </>
    )
}
export default Footer;