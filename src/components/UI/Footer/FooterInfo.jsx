import React from "react";
import { FooterLogo } from "./FooterUI/FooterLogo";
import { FooterLinks } from "./FooterUI/FooterLinks";
import facebook from '../../../img/image 20.png';
import instagram from '../../../img/image 21.png';
import youtube from '../../../img/image 22.png'

export const FooterInfo = ({footerInfo}) => {
    return (
        <>
         <div className="footer__info">
            <FooterLogo/>
                {footerInfo.map((item, index) => {
                return  <FooterLinks key={item.id} links={item}/>
            })}
            <div className="footer_info_socials">
                <ul className="footer_info_socials_test">
                    <li><img src={facebook} alt="" /></li> 
                    <li><img src={instagram} alt="" /></li>
                    <li><img src={youtube} alt="" /></li>
                </ul>
                
            </div>
        </div>
        </>
    )
}