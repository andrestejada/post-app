import React from 'react'
import Button from '@material-ui/core/Button';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { signInWithGoogle } from '../../actions/authActions';


export const GoogleBtn = () => {
    const dispatch = useDispatch()
    return (
        <>
         <Button
            variant="contained"
            startIcon={<FcGoogle/>}
            onClick={ ()=>dispatch( signInWithGoogle() ) }
            style={{marginBottom:'1em'}}             
         > Inicia sesión con Google</Button>
            
        </>
    )
}
