import React from "react";
import '../../styles/Reviews.scss';
import star from '../../../img/svg/Star.svg';

export const StandartReviews = ({review}) => {
    const {name, role, description, avatar} = review
    return(
        <div className='reviews_info_wrapper'>
            <div className='reviews_info_about_describe'>
                <img src={avatar} className="reviews_info_about_guy_avatar" />
                <div className='reviews_info_about_guy'>
                    <h5 className='reviews_info_about_name'>{name}</h5>
                    <p className='reviews_info_about_role'>{role}</p>
                </div>
            </div>
            <div className='reviews_info_review'>
                <p className='reviews_info_review_text'>{description}</p>
            </div>
            <div className='review_info_rate'>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>
        </div>
    )
}