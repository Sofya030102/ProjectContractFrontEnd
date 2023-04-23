import React from 'react';
import contractImg from '../../img/contract.jpg'
import './sectionCreate.css'

function SectionCreate(){
    return(
  <section className='section-top'>

  <div className="section-top__container container">

     <div className="create-contract active-contract">
          <div className="create-contract__info">
            <p className='info'>Studio 721 is a free tool for configuring,
            compiling, deploying, and verifying custom  NFT smart contracts. Studio 721 doesn't host your assets or metadata; use your favorite hosting service and link it to your NFT via "Token URI". Not sure where to start? There's a
            Created by </p>
          </div>

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
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit
            . Hic eveniet, laudantium nihil eligendi quae dolores doloremque
             repellendus nobis placeat ipsum dolor nisi distinctio corporis
             nostrum nemo, sint doloribus quod inventore?</p>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit
            . Hic eveniet, laudantium nihil eligendi quae dolores doloremque
             repellendus nobis placeat ipsum dolor nisi distinctio corporis
             nostrum nemo, sint doloribus quod inventore?</p>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit
            . Hic eveniet, laudantium nihil eligendi quae dolores doloremque
             repellendus nobis placeat ipsum dolor nisi distinctio corporis
             nostrum nemo, sint doloribus quod inventore?</p>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit
            . Hic eveniet, laudantium nihil eligendi quae dolores doloremque
             repellendus nobis placeat ipsum dolor nisi distinctio corporis
             nostrum nemo, sint doloribus quod inventore?</p>
     </div>

     <div className="result-contract active-contract">

     </div>

  </div>

  </section>
  );
  }


  export default SectionCreate
