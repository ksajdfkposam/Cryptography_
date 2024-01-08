import React from 'react';
import './header.css'
import {CurrencyEth} from 'phosphor-react'
import { Link } from 'react-router-dom';
function Header(props) {

  function handleOut(){
    sessionStorage.clear()
  }


    return (
        <div className='navbar' >
        <div className="logo">
            <h1 style={{color:"white",padding:"5px"}}>CryptoVerse </h1>
            <CurrencyEth size={32} color="#a9ec18" />
        </div>
      <ul>
     {sessionStorage.getItem("Stat")!=="OK" && <li> <Link to='/login' >Login</Link> </li>}
     {sessionStorage.getItem("Stat")==="OK"

     &&
     <li> <Link to='/' onClick={handleOut}>LogOut</Link> </li>

     
     
     }
      {sessionStorage.getItem("Stat")!=="OK" && <li> <Link to='/register' >Register</Link> </li>}
        <li> <Link to='/' >Home</Link> </li>
        <li> <Link to='/coins'>Coins</Link></li>
        
      </ul>
    </div>
        
    );
}

export default Header;