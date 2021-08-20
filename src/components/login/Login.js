import React from 'react'
import Footer from '../layout/Footer'
import { Nav } from '../layout/Nav'
import { LoginForm } from './LoginForm'
import './Login.scss'
import LoginCard from './LoginCard'


const Login = () => {
    return (
        <>
            <Nav/>
                <div className='form-container' >
                    <LoginCard/>
                    <LoginForm/>
                </div>
            <Footer/>
        </>
    )
}

export default Login
