import React, { useState } from 'react'
import { Avatar, FormControl,TextField, Button } from '@material-ui/core'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { UseForm } from '../../hooks/UseForm';
import { Alert } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import { RegisterUser } from '../../actions/authActions';
let mensaje

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',      
    },
    textField: {      
      width: '2em',
    },
    button: {
        margin: '2em 0',
      },
  }));
  

export const FormRegister = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const initialState={
        correo:'',
        password:''
    }
    const [error, setError] = useState(false)
    const [formValues,handleOnchange]=UseForm(initialState);
    const {correo,password}= formValues;
    
    const handleOnSubmit =async(e)=>{
        e.preventDefault();
        //validar campos vacios
        if(correo.trim()===''||password.trim()===''){
            setError(true)
            mensaje='Todos los campos son obligatorios'
            return 
        }
        //validar que el usuario no exista
        setError(false)
        const msg = await dispatch( RegisterUser(correo,password) )
        if(msg){
            mensaje = msg
            setError(true)
            return
        }
    }
    return (
        <div  className='form-register'>
        <form
            onSubmit={handleOnSubmit} 
            className={`${classes.root} custom-card `} 
        >
            <Avatar>
                < LockOpenIcon style={{ color: green[500] }} />
            </Avatar>
            <h2>Registrarse</h2>
            <hr/>
            <FormControl>
                <TextField 
                    fullWidth
                    label="Correo" 
                    variant="outlined"  
                    margin='normal'
                    type='email'
                    name='correo'
                    value={correo}
                    onChange={handleOnchange}                
                />
            </FormControl>
            <FormControl>
                <TextField 
                    fullWidth 
                    label="Password" 
                    variant="outlined" 
                    margin='normal'
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleOnchange}      
                />
            </FormControl>
            <Button
                className={`${classes.button} custom-btn `}
                variant="contained"
                type='submit'            
            >Registrarse</Button>
            {
                error && <Alert severity="error">{mensaje}</Alert>
            }
            <Link to='/auth/login' > Si ya tienes una cuenta ve a iniciar Sección </Link>       
        </form>
        </div>
    )
}
