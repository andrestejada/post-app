import React from 'react'
import './Finish.scss'
import instagram from '../../assets/instagram.png'

export const Finish = () => {
    return (
        <div className='finish-container' >
            <p>Gracias por <span>completar el ejercicio </span> </p>
            <p>Te invitamos a ver mas información</p>
            <div>               
                <a href='https://www.instagram.com/waconomads/' ><img src={instagram} alt='instagram'/></a>
                <a className='btn-conoceMas' href='https://wacoservices.com/'>Conocer más</a>
            </div>
        </div>
    )
}
