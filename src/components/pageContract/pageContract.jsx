import React from 'react';
import contractImg from '../../img/contract.jpg'
import './pageContract.css'

function SectionCreate(){
    return(
  <section className='section-top'>

  <div className="section-top__container container">

     <div className="create-contract active-contract">
          

          <div className="test-token">
             <div className="test-token__content">
               <div className="test-token__start">
                   <div className="test-token__img"><img src={contractImg} width="300px" height="300px" alt="" /></div>

               </div>
               <div className="test-token__end">

                  <div className="text-token-end__title">
                     <div className="Name create-contract-box">
                      <p className="title">Name</p>
                      <input className='Name-active' type="text" />
                     </div>
                     <div className="Abbreviation create-contract-box">
                      <p className="title">Abbreviation</p>
                      <input className='Abbreviation-active' type="number" />
                     </div>
                     <div className="Supply create-contract-box">
                      <p className="title">Supply</p>
                      <input className='change-supplpy' type="checkbox" />
                      <input className='Supply-active' type="text" />
                     </div>
                     <div className="Price create-contract-box">
                      <p className="title">Price</p>
                      <input className='change-supplpy' type="checkbox" />
                      <input className='Price-active' type="text" />
                     </div>
                       <div className="Royalties create-contract-box">
                      <p className="title">Royalties</p>
                      <input className='Royalties-active' type="text" />
                     </div>
                     <div className="token-url create-contract-box">
                      <p className="title">Token URI</p>
                      <textarea className='token-url__active' type="text" />
                     </div>
                     <div className="contact-url create-contract-box">
                      <p className="title">Contract URI</p>
                      <input className='contact-token__active' type="text" />
                     </div>

                  </div>



               </div>
             </div>
          </div>
          <p></p>
     </div>

     <div className="result-contract active-contract">

     </div>

  </div>

  </section>
  );
  }


  export default SectionCreate
