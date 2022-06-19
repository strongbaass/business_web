import React, {useState} from "react";
import { FooterMock } from "../mock/FooterMock";
import './styles/Footer.scss'
import { FooterInfo } from "./UI/Footer/FooterInfo";


export const Footer = () => {
    const [footerInfo, setFooterInfo] = useState(FooterMock);
    return(
       <FooterInfo footerInfo={footerInfo}/>
    )
}