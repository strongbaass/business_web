import React from 'react';
import dashboardLight from '../img/DashboardLight.png';
import dashboardDark from '../img/DashboardDark.png';

const BusinessHelp = () => {
    return(
        <div>
            <div className='header_content_about'>
                <h1 className='header_content_title'>We help to get <span>Business</span><p>solution ever</p></h1>
                <h6 className='header_content_description'>We provide many features that you can use cheaply and easily. Try it now <p>and get an interesting promo</p> </h6>
                <div className='header_content_buttons'>
                    <button className='header_content_first_btn'>Try for free</button>
                    <button className='header_content_second_btn'>Watch a demo</button>
                </div>
                <div className='header_content_images'>
                    <img className='header_content_first_image' src={dashboardLight} alt="" />
                    <img className='header_content_second_image' src={dashboardDark} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BusinessHelp;