import React from 'react';
import './PageMint0.css'


function PageMint0() {
    return (
        <div className='container0-MintPage0'>
            <div >
                <div className='container-MintPage0'>
                    <div>
                        <h2 className='h2-MintPage0'>Адрес контракта</h2>
                        <div className='space-MintPage0'></div>
                        <div>
                            <input className='input-MintPage0' type="text" placeholder="Адрес контракта" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></input>
                        </div>
                        <div className='space2-MintPage0'></div>
                    </div>
                    <div className='divide-line-MintPage0'></div>
                    <div className='lower-text-MintPage0'>
                        <div className='markup-lower-MintPage0'>
                            <h3 className='text-MintPage0'>Кошелек подключен</h3>
                            <div className='space3-MintPage0'></div>
                            <div className='address-wallet-MintPage0'>
                                <div className='address-wallet-text-MintPage0'>
                                    <span style={{ fontFamily: 'monospace' }}>
                                        mumbai
                                        |
                                        0x7791...da7a
                                    </span>
                                    <span className='space4-MintPage0'></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageMint0;