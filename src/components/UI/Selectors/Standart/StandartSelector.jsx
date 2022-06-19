import React from 'react';
import '../../../styles/StandartSelector.scss'
import tick from '../../../../img/svg/tick.svg'
import blacktick from '../../../../img/svg/blacktick.svg'
import whitetick from '../../../../img/svg/whitetick.svg'

export const StandartSelector = ({selector, isActive, switchColor}) => {
    const {name, description, count, list} = selector
    const listIcon = (listItem) => {
        if(isActive && !listItem.isGray){
            return whitetick
        }else if(listItem.isGray ) {
            return blacktick
        }
            return tick
    }
    return(
        <div className={`standart_selector_wrapper ${isActive && 'active'}`} onClick={switchColor} >
            <div className='standart_selector_info'>
                <h3 className='standart_selector_title'>{name}</h3>
                <p className='standart_selector_description'>{description}</p>
                <div className='standart_selector_price'>
                    <h2 className='standart_selector_value'>${count}</h2><span>/month</span>
                </div>
            </div>
                <button className='standart_selector_btn'>Select Plan</button>
                <ul className='standart_selector_ul'>
                    
                {list && list.map((item, index) => 
                    <li className='standart_selector_list'><img src={ listIcon(item)} className="standart_list_img" alt="" /><span className="standart_list_text">{item.name}</span></li>
                )}  
                </ul>
        </div>
    )
}