import logo from "/Assets/applogo.png";
import about from "/Assets/about-filled-svgrepo-com.png";
import home from "/Assets/home-svgrepo-com.png";
import contact from "/Assets/gui-contacts-svgrepo-com.png";
import cart from "/Assets/cart-svgrepo-com.png";
import loglogo from "/Assets/log-logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [logbtn, setLogBtn] = useState("LogIn");

   useEffect(()=>{
    console.log("useEffect called");
   },[logbtn]); 
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="App Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/"><img className="navLogo" src={home} /></Link></li>
                    <li><Link to="/contactus"><img className="navLogo" src={contact} /></Link></li>
                    <li><Link to="/about"><img className="navLogo" src={about} /></Link></li>
                    <li><Link to="/cart"><img className="navLogo" src={cart} /></Link></li>
                    <button className="logbtn" onClick={() => {
                        logbtn === "LogIn" ?
                        setLogBtn("LogOut") : setLogBtn("LogIn");
                    }}><img className="loglogo" src={loglogo}/>{logbtn}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;