import React from 'react';
import { useState } from 'react';
import { TrendUp,TrendDown} from 'phosphor-react'
import CoinChart from './CoinChart';

function Details(props) {

    const newObj=props.obj;
   // console.log(newObj,"hello")
    const [currency, setCurrency]=useState('inr')
    if(newObj.id){
    
 const {id,name,image,market_data,last_updated,market_cap_rank,description}=newObj;
  // console.log(id,name,image,market_data)
   const {price_change_percentage_24h}=market_data
const profit =price_change_percentage_24h > 0  
   
  const currencySymbol = currency ==='inr' ? '₹': '$' 
    return (
        
             <div className=' coin-detail'  > 
           <div className='coin-info'>
           <div className='btns'>
             <button onClick={()=>setCurrency('inr')} >inr</button>
             <button onClick={()=>setCurrency('usd')}>usd</button>
           </div>
              <div className="time">
              {last_updated}
              </div>
              <div className="coin-image">
                <img height={"150px"} src={image.large} alt={name} />
              </div>
              <div className="coin-name">
              {name}
              </div>
              <div className="coin-price">
             {currencySymbol}  {market_data.current_price[currency]}
              </div>
              <div className="coin-profit">
              {profit ? <TrendUp color='green' /> : <TrendDown color='red' />  }
                {` price_change_percentage_24h`} % 
              </div>
              <div className='market-rank'>
             
               #{market_cap_rank}
              </div>
              <div className='coin-desc'>
                <p>     {description['en'].split('.')[0]} </p>
        </div>
           </div>
           <CoinChart currency={currency} /> 
           </div>
    
    );

    }
}

export default Details;