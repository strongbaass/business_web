import React from "react";
import closebtn from '../../../img/svg/xmark.svg';
import '../../../js/navbar'

const NavButtons = () => {
    return(
        <>
        <div className="nav_buttons" id="nav_buttons">
            {/* <ul className="nav_buttons"> */}
            <img src={closebtn} className="closebtn" id="closebtn"/>
                <li className="nav_button">Product</li>
                <li className="nav_button">Soltuion</li>
                <li className="nav_button">Customer</li>
                <li className="nav_button">Pricing</li>
                <li className="nav_button">About us</li>  
                {/* </ul> */}
            <div className="auth_btns">
                <button className="login_btn">Login </button>
                <button className="signup_btn">Sign Up</button>
            </div>  
        </div>
        </>
    )
}

export default NavButtons;