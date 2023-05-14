import React from 'react';
import './Header.css'
import {useState} from 'react'
import {ethers} from 'ethers'
import MyToken from './MyToken.json'


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

   const getBalance =  (account)=>{
      window.ethereum.request({
         method:'eth_getBalance',
         params: [account,'latest'],
      }).then((balance)=>{
         setBalance(ethers.formatEther(balance));
      })
   }

   const deployConract = async ()=>{


      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const abi = MyToken.abi;
      const bytecode = MyToken.bytecode; // your compiled contract bytecode

      const contractFactory = new ethers.ContractFactory(abi, bytecode, provider.getSigner());
      const contract = await contractFactory.deploy('myToken','nft');

      await contract.deployed();
      const contractAddress = contract.address;
      console.log(contractAddress)
   }



    return (
      <div >
         <header className='header-page'>
           <div className="header-page__container container">

             <div className="logo"><span>C</span>ontract<span>M</span>aker</div>

             <nav className="header-page__nav">
              <ul className="header-page__ul">
                 <li className="header-page__li">
                    <a href="https://www.google.ru/" className="header-page__link">Guide</a>
                 </li>
                 <li className="header-page__li">
                    <a href="https://www.google.ru/" className="header-page__link">Artkit</a>
                 </li>
                 <li className="header-page__li">
                    <a href="https://www.google.ru/#" className="header-page__link">Contact</a>
                 </li>
                 <li className="header-page__li">
                    <a href="https://www.google.ru/" className="header-page__link">Mint</a>
                 </li>
              </ul>
             </nav>
             <button onClick={deployConract} className='enable-wallet'>кнопка</button>
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
