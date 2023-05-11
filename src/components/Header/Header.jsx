import React from 'react';

import './Header.css'
import {useState} from 'react'
//import {ethers} from 'ethers'

import {
   Link,
 } from 'react-router-dom';



function Header() {
   const [userAccount, setUserAccount] = useState(null)

   const [balance,setBalance] = useState(0)

   const onConnect = () =>{
      if(window.ethereum){
        window.ethereum.request({method:"eth_requestAccounts"}).then((account)=>{
         setUserAccount(account[0]);
        })
      }else{
         alert('установите метамаск');
      }
   }

   /*const getBalance =  (account)=>{
      window.ethereum.request({
         method:'eth_getBalance',
         params: [account,'latest'],
      }).then((balance)=>{
         setBalance(ethers.formatEther(balance));
      })
   }*/

    return (
      <div >
         <header className='header-page'>
           <div className="header-page__container container">

               <Link to="/" style={{'textDecoration':'none','color':"white"}}>
             <div className="logo"><span>C</span>ontract<span>M</span>aker</div>
             </Link>

             <nav className="header-page__nav">
              <ul className="header-page__ul">
                 <li className="header-page__li">
                    <Link to="guide" className="header-page__link">Гид</Link>
                 </li>
                 <li className="header-page__li">
                    <Link to="contract" className="header-page__link">Контракт</Link>
                 </li>
                 <li className="header-page__li">
                    <Link to="create" className="header-page__link">Выпустить</Link>
                 </li>
              </ul>
             </nav>

             <div className="header-page__authorization">
               {userAccount ? (
                 <div className="user_info">
                   <span className='user_info-active'>ваш аккаунт:{userAccount}</span>
                   <span className='user_info-active'>ваш баланс:{balance}</span>

                 </div>
               ):(
             <>
               <button onClick={onConnect} className='enable-wallet'>Подключить кошелек</button>
            </>
               )}
             </div>
           </div>
         </header>

      </div>
    );
  }


  export default Header
