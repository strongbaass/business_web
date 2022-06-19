import React from "react";


export const FooterLinks = ({links}) => {
    const {name, list} = links
    return(
        <>
        <div className="footer__info__links">
            <ul className="footer__table">
                {name}
               {list && list.map((item, index) => 
               <li className="footer__table__list"><p className="footer__table__list_text">{item.text}</p></li>
               )}
            </ul>  
        </div>
        </>
    )
}