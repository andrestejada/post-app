import React from 'react'
import Footer from '../layout/Footer'
import { Nav } from '../layout/Nav'
import { FormRegister } from './FormRegister'
import './Register.scss'

const Register = () => {
    return (
        <>
         <Nav/>
         <div className='form-container' >
            <FormRegister/>
         </div>
         <Footer/>   
        </>
    )
}

export default Register
