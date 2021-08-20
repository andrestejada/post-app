import React from 'react'
import {ReactComponent as Title} from '../../assets/waco.svg';
import './Welcome.scss'


export const Welcome = () => {
    return (
        <div className='welcome-container' >
            <div>
                <p>Bienvenido a tu</p>
                <span className='font-bold-900' >Entrevista Tecnica </span> <span>en</span>
                <Title/>
            </div>
            
            
        </div>
    )
}
