import logo from "/Assets/applogo.png";
import about from "/Assets/about-filled-svgrepo-com.png";
import home from "/Assets/home-svgrepo-com.png";
import contact from "/Assets/gui-contacts-svgrepo-com.png";
import cart from "/Assets/cart-svgrepo-com.png";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="App Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><img className="navLogo" src={home}/></li>
                    <li><img className="navLogo" src={contact}/></li>
                    <li><img className="navLogo" src={about}/></li>
                    <li><img className="navLogo" src={cart}/></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;