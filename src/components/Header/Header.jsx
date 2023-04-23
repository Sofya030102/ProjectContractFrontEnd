import React from 'react';
import './Header.css'


function Header() {
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

             <div className="header-page__authorization">
               <button className='enable-wallet'>Подключить кошелек</button>
             </div>
           </div>
         </header>

      </div>
    );
  }


  export default Header
