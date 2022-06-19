import React from 'react';
import { StandartReviews } from './StandartReviews.jsx/StandartReviews';

export const Reviews = ({reviewsInfo}) => {
    return(
        <>
            <div className='reviews_info'>
                {reviewsInfo.map((item, index) => {
                    return <StandartReviews key={item.id} review={item}/>
                })}
            </div>
       </>
    )
}