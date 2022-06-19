import React, {useState} from 'react';
import { StandartSelector } from './Standart/StandartSelector';
import '../../styles/Pricing.scss'

export const Selectors = ({isMonthly, pricingInfo}) => {
    const [isActive, setActive] = useState(1);
    return(
        <>
        <div className='pricing_selectors'> 
            {pricingInfo.map((item, index) => {
              return <StandartSelector key={item.id} selector={item} isActive={isActive === index} switchColor={() => setActive(index)} />
            })}
             </div>
        </>
    )
}