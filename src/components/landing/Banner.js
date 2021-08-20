import React from 'react'
import america from '../../assets/america.png'

import './Banner.scss'

export const Banner = () => {
    return (
        <div className='banner-container' >
            <div className='banner-img' >
                <img src={america} alt='america'/>
            </div>
            <div className='banner-text' >
                <p className='text-align-right' >Trabajamos para</p>
                <p className='font-bold-900' >Convertir ideas <span>en</span> </p>
                <p className='font-bold-900 text-align-right '>productos.</p>
            </div>
        </div>
    )
}
