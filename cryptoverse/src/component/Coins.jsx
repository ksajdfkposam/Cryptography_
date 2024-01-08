import React from 'react';
import { useState, useEffect } from 'react'
import { Baseurl } from '../baseUrl'
import axios from 'axios'
import Header from '../Header'
import { Link } from 'react-router-dom'
import CoinDetail from './CoinDetail';
import './Res.css'
function Coins(props) {
  let f=""
    const[coins, setCoins]=useState([])
    const[coin, setCoin]=useState([])
    const [currency, setCurrency]=useState('usd')
    const [search, setSearch]=useState('')
    const [show,setShow]=useState(true)
    let temp ="";
    const currencySymbol = currency ==='inr' ? '₹': '$'

    useEffect(()=>{
      const getCoinsData=async()=>{
         try {
          const {data} =await axios.get(`${Baseurl}/coins/markets?vs_currency=${currency}`)
        
        setCoins(data)
        setCoin(coins)
       
       
         } catch (error) {
          console.log(error)
        
         }
      }
      getCoinsData() 
},[currency,coin])


   



function handleData(){
 console.log(search.toLowerCase())
 let temp=coins.filter((data,i)=>{
  console.log(data.name.toLowerCase() === search.toLowerCase())
  return data.name.toLowerCase() === search.toLowerCase();
 })

 const t="";
 setSearch(t)
  console.log(temp)
  if(temp.length>0){
    setCoin(temp)
  }
  else{
    setCoin(coins)
    f=<p>Not Found</p>
  }

 
}



    return (
       <>
       <Header/>

{
  sessionStorage.getItem("Stat")==="OK"?
(
  <>
  <div className='btn' >
        <input type="text" 
            placeholder='Search Your Coins ' 
            onChange={(e)=>setSearch(e.target.value)}
            className='inp'
            value={search}
        />
             <button onClick={handleData} >Search</button>
            {f}
           </div>

       <div className='btn' >
             <button onClick={()=>setCurrency('inr')} >inr</button>
             <button onClick={()=>setCurrency('usd')}>usd</button>
           </div>
           {console.log(coin)}
           { 
            coin.map((data,i)=>{
            
            return(
            
                       <div className='ex-cards' key={data.id}>
                <div className="image">
                
               <Link to={`${data.id}`}>  
            
             
            
               <img height={"80px"} src={data.image} alt="" />
               </Link> 
            
            
            
            
                </div>
                <div className="name">  {data.name}
                </div>
                <div className="price">
                    {currencySymbol} {data.current_price.toFixed(0)}
                </div>
              
                <div style={ data.price_change_percentage_24h>0 ?{color:"green"}:{color:"red"}} className="rank">
            
                  {data.price_change_percentage_24h>0?"+" + data.price_change_percentage_24h.toFixed(2):data.price_change_percentage_24h.toFixed(2)}
                </div>
             </div>
            )
            })
            }

</>
):<><div style={{color:"white"}}>Register First</div>
</>
}



       

       
      





















       </>
     
    );
}

export default Coins;