import React,{useState} from 'react';
import { pricingInfoMock } from '../mock/PricingInfoMock';
import './styles/Pricing.scss'
import { Selectors } from './UI/Selectors/Selectors';
export const Pricing = () => {
    
    const [pricingInfo, setPricingInfo] = useState(pricingInfoMock || []);
    const [isMonthly, setMonthly] = useState(true);
    
    const changePrice = () => {
    setMonthly(!isMonthly)
      if(isMonthly){
     const  monthlyInfo = pricingInfo.map((item) => {return {...item, count : item.count * 12 - 5}})
    setPricingInfo(monthlyInfo)
      }else{
          setPricingInfo(pricingInfoMock);
      }
    }
    return(
        <div className='pricing_info'> 
            <div className='pricing_info_text'>
                <h1 className='pricing_info_title'>Our pricing</h1>
                <h6 className='pricing_info_description'>Pay securely online and manage the booking via desktop or via the mobile app.</h6>
            </div>
            <div className='pricing_info_selector'>
                <p className='pricing_info_monthly'>Monthly</p>
                <label class="switch">
                    <input type="checkbox" onChange={() => changePrice()}></input>
                    <span class="slider round"></span>
                </label>
                <p className='pricing_info_annualy'>Annualy</p>
            </div>
                <Selectors isMonthly={isMonthly} pricingInfo={pricingInfo} />
        </div>
    )
}