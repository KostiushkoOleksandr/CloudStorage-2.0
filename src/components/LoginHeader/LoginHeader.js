import React from 'react';

const LoginHeader = () => {
    return (
        <div>
            <div className='header'>
                <img className='header__image' src="/images/cloud-storage.png" alt="logo"/>
                <a href="https://alexkost.netlify.app/" target='_blank' >
                    <img className='header__setting' src="/images/icon-portfolio.png" alt="portfolio"/>
                </a>
            </div>
        </div>
    );
};

export default LoginHeader;