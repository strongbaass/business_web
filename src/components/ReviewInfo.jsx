import React, {useState} from 'react';
import '../components/styles/Reviews.scss';
import {ReviewsMock} from "../mock/ReviewsMock"
import { Reviews } from './Reviews/Reviews';

export const ReviewInfo = () => {
    const [reviewsInfo, setreviewsInfo] = useState(ReviewsMock);
    return(
    <div className='reviews_obolo'>
        <div className='reviews_info'>
            <div className='reviews_info_title'>
                <h1 className='reviews_info_title_text'>GroundDesk is loved by users</h1>
            </div>
        </div>
        <Reviews reviewsInfo={reviewsInfo}/>
    </div>
    )
}