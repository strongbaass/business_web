import React from "react";
import servicenow from '../../../img/ServiceNow.png';
import paychex from '../../../img/Paychex.png';
import github from '../../../img/GitHub.png';
import stripe from '../../../img/Stripe.png'
import zendesk from '../../../img/Zendesk.png';
import '../../../components/styles/NavBar.scss'

const Services = () => {
    return (
        <div className="header_content_services">
            <img src={servicenow} alt="" />
            <img src={paychex} alt="" />
            <img src={github} alt="" />
            <img src={stripe} alt="" />
            <img src={zendesk} alt="" />
        </div>
    )
}

export default Services;