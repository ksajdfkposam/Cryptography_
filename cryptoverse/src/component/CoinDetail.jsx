import React from 'react'
import { useEffect, useState } from 'react'
//import { Baseurl } from '../baseUrl'
import { Baseurl } from '../baseUrl'

import axios from 'axios'
import { useParams } from 'react-router-dom'
import './coinDetail.css'
import Details from './Details'

const CoinDetail = () => {
  const [coin, setCoin]=useState([])
//const[first,setFirst]=useState();
  const {id} = useParams()
 // const [currency, setCurrency]=useState('inr')
//  const currencySymbol = currency ==='inr' ? '₹': '$'
  //const profit = coin.market_data.price_change_percentage_24h > 0   
  //console.log(profit)
    
      useEffect(()=>{
async function k(){
    const res =await axios.get(`${Baseurl}/coins/${id}`)
    const data=await res.data
 //   console.log(data)
    setCoin(data)
}
    k();    
     
      },[])

 
  return (
  <>
   {
       sessionStorage.getItem("Stat")==="OK" ?
       (<Details obj={coin}/>):<><div style={{color:"white"}}>Register First</div>
   
 
</>
}
  
  </>
  )
}

export default CoinDetail;

