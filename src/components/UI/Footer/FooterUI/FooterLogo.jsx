import React from "react";
import whitelogo from '../../../../img/whitelogo.png'
import '../../../styles/Footer.scss'

export const FooterLogo = () => {
    return(
            <div className="footer__info__logo">
                    <img className="footer__info__img" src={whitelogo} alt="" />
                    <div className="footer__info__text">
                        <p>Manage file easily.</p>
                        <p>Everywhere, everytime.</p>
                    </div>
                </div>
    )
}