import React from 'react'
import { Navbar } from './Navbar'
import './Landing.scss'
import { Welcome } from './Welcome'
import { Banner } from './Banner'
import { Footer } from './Footer'
import { Beneficios } from './Beneficios'
import { Carousel } from './Carousel'
import { Finish } from './Finish'
import { scroll } from '../../helpers/ScrollBackground'


const Landing = () => {  
    scroll()
    return (
        <div className='landing' >            
            <Navbar/>
            <Welcome/>
            <Banner/>
            <Beneficios/>
            <Carousel/>
            <Finish/>
            <Footer/>

        </div>
    )
}

export default Landing
