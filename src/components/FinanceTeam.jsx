import React from 'react';
import './styles/Finance.scss'
import dashboard from '../img/DashboardLightFull.png'
import firstguy from '../img/Mask.png';
import secondguy from '../img/Mask1.png';
import thirdguy from '../img/Mask2.png';
import fourthguy from '../img/Mask3.png'

export const FinanceTeam = () => {
    return(
        <div className='finance_info'>
            <div className='finance_info_text'>
            <h1 className='finance_info_title'>Easy collaborative <p>financial team</p></h1>
            <h6 className='finance_info_description'>No need to worry about your files being lost because we<p>are very loyal to be your storage platform.</p></h6>
                <div className='finance_people_try'>
                        <img src={firstguy} className="finance_people_avatar" alt="" />
                        <img src={secondguy} className="finance_people_avatar image" alt="" />
                        <img src={thirdguy} className="finance_people_avatar image" alt="" />
                        <img src={fourthguy} className="finance_people_avatar image" alt="" />
                        <h6 className='finance_people_try_text'>More than 10.000 people have tried</h6>
                </div>
                <button className='finance_info_button'>Try for free</button>
            </div>
           <img className='finance_img_dashboard' src={dashboard} alt="" />
        </div>
    )
}
