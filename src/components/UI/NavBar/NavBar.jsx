import React, {useRef} from "react";
import '../../styles/NavBar.scss';
import logo from '../../../img/logo.png';
import bars from '../../../img/svg/barssolid.svg';
import NavButtons from "../NavButtons/NavButtons";
import BusinessHelp from "../../BusinessHelp";
import showtest from '../../../js/navbar'
import closebtn from '../../../img/svg/xmark.svg';


const NavBar = () => {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('test')
    }
    const closeNavBar = () => {
        navRef.current.classList.remove('test')
    }
    return(
            <header className="header" >
            <div className="header_background">
                <nav className="nav_menu">
                    <img src={logo} className="logo" alt=""/>
                        <div className="nav_buttons" ref={navRef}>
                            <img src={closebtn} className="closebtn" onClick={closeNavBar}/>
                                <li className="nav_button">Product</li>
                                <li className="nav_button">Soltuion</li>
                                <li className="nav_button">Customer</li>
                                <li className="nav_button">Pricing</li>
                                <li className="nav_button">About us</li>  
            <div className="auth_btns">
                <button className="login_btn">Login </button>
                <button className="signup_btn">Sign Up</button>
            </div>  
        </div>
                    <img src={bars} className="bars" id="bars" onClick={showNavBar}/>
                </nav>
               
                    <div className="header_content">
                        <BusinessHelp/>
                    </div>
                </div>
            </header>
    )
}

export default NavBar;