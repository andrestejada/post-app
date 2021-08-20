import React, { useState } from 'react'
import logo from '../../assets/logo-waco.png'
import {Link} from 'react-router-dom'
import './Navbar.scss'
import {ReactComponent as BurguerMenu} from '../../assets/burguer-menu.svg';
import {ReactComponent as Close} from '../../assets/close.svg';


export const Navbar = () => {
    
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    
    return (
        <nav className='navbar-landing' >

            <div className='navbar-img-container' >
                <img src={logo} alt='imagen' />
            </div>

                <BurguerMenu 
                    className='burger-menu'
                    onClick={ ()=> setIsOpenMenu(!isOpenMenu) } 
                />
            <div className='menu-container-landing' style={isOpenMenu ? {display:'flex'}  :null } >
                <div className='nav-responsive' >
                    <img src={logo} alt='imagen' />
                    <Close
                        onClick={ ()=> setIsOpenMenu(!isOpenMenu) }
                    /> 
                </div>
                <a href='/' >HOME</a>
                <a href='#beneficios' >BENEFICIOS</a>
                <Link to='/auth/login' >Login</Link>
            </div>
        </nav>
    )
}
