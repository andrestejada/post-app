import React from 'react'
import logo from '../../assets/logo-waco.png'
import './Footer.scss'


export const Footer = () => {
    return (
        <footer className='landing-footer-container'>
            <div className='logo-container' >
                <img  src={logo} alt='logo' />
            </div>
        </footer>
    )
}

