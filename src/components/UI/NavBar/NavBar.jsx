import React from "react";
import '../../styles/NavBar.scss';
import logo from '../../../img/logo.png';
import bars from '../../../img/svg/barssolid.svg';
import NavButtons from "../NavButtons/NavButtons";
import BusinessHelp from "../../BusinessHelp";
import '../../../js/navbar'


const NavBar = () => {
    return(
            <header className="header">
            <div className="header_background">
                <nav className="nav_menu">
                    <img src={logo} className="logo" alt=""/>
                        <NavButtons/>
                    <img src={bars} className="bars" id="bars" />
                </nav>
               
                    <div className="header_content">
                        <BusinessHelp/>
                    </div>
                </div>
            </header>
    )
}

export default NavBar;