import { Link, useLocation } from "react-router-dom";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Privacy.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Privacy = () => {
    return (
        <>
            <Navbar />
            <ToastContainer />

            <div className="privacy-container">
                <h1 className="privacy-heading">Privacy Policy</h1>
                <p className="privacy-last-updated">Last updated: October 15, 2024</p>
                <p className="privacy-description">
                    This Privacy Policy describes Our policies and procedures on the collection, use, 
                    and disclosure of Your information when You use the Service and tells You about 
                    Your privacy rights and how the law protects You.
                </p>
                <p className="privacy-data-use">
                    We use Your Personal data to provide and improve the Service. By using the Service, 
                    You agree to the collection and use of information in accordance with this Privacy 
                    Policy. This Privacy Policy has been created with the help of the 
                    <a 
                        href="https://www.termsfeed.com/privacy-policy-generator/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="privacy-generator-link"
                    >
                        Privacy Policy Generator
                    </a>.
                </p>

                <h2 className="privacy-subheading">Interpretation and Definitions</h2>
                <h3 className="privacy-sub-subheading">Interpretation</h3>
                <p className="privacy-definition">
                    The words of which the initial letter is capitalized have meanings defined under 
                    the following conditions. The following definitions shall have the same meaning 
                    regardless of whether they appear in singular or in plural.
                </p>

                <h3 className="privacy-sub-subheading">Definitions</h3>
                <p className="privacy-definition-intro">For the purposes of this Privacy Policy:</p>
                <ul className="privacy-list">
                    <li><p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p></li>
                    <li><p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party...</p></li>
                    <li><p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Bibliotheca.</p></li>
                    <li><p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website...</p></li>
                    <li><p><strong>Country</strong> refers to: Bihar, India</p></li>
                    <li><p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.</p></li>
                    <li><p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p></li>
                    <li><p><strong>Service</strong> refers to the Website.</p></li>
                    <li><p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company...</p></li>
                    <li><p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself...</p></li>
                    <li><p><strong>Website</strong> refers to Bibliotheca, accessible from 
                        <a 
                            href="https://bibliotheca-delta.vercel.app/" 
                            rel="noopener noreferrer" 
                            target="_blank" 
                            className="privacy-website-link"
                        >
                            https://bibliotheca-delta.vercel.app/
                        </a>
                    </p></li>
                    <li><p><strong>You</strong> means the individual accessing or using the Service...</p></li>
                </ul>

                <h2 className="privacy-subheading">Collecting and Using Your Personal Data</h2>
                <h3 className="privacy-sub-subheading">Types of Data Collected</h3>
                <h4 className="privacy-small-heading">Personal Data</h4>
                <p className="privacy-personal-data">
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information...
                </p>
                <ul className="privacy-list">
                    <li><p>Email address</p></li>
                    <li><p>First name and last name</p></li>
                    <li><p>Phone number</p></li>
                    <li><p>Address, State, Province, ZIP/Postal code, City</p></li>
                    <li><p>Usage Data</p></li>
                </ul>

                <h4 className="privacy-small-heading">Usage Data</h4>
                <p className="privacy-usage-data">
                    Usage Data is collected automatically when using the Service. It may include information such as Your Device's IP address...
                </p>

                <h4 className="privacy-small-heading">Tracking Technologies and Cookies</h4>
                <p className="privacy-cookies-info">
                    We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.
                </p>
                <ul className="privacy-list">
                    <li><strong>Cookies or Browser Cookies</strong></li>
                    <li><strong>Web Beacons</strong></li>
                </ul>
            </div>
            <Footer />
        </>
    );
}

export default Privacy;