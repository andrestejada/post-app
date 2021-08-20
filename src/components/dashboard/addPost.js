import { Button, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewPost } from '../../actions/postActions';
import { UseForm } from '../../hooks/UseForm';
let mensaje
export const AddPost = () => {
    const dispatch = useDispatch()
    const initialState={
        titulo:'',
        descripcion:''
    }
    const [error, setError] = useState(false)
    const [formValues,handleOnchange,reset]=UseForm(initialState);
    const {titulo,descripcion}= formValues;
    const handleOnSubmit =(e)=>{
        e.preventDefault();
        if( titulo.trim()===''||descripcion.trim()==='' ){
            setError(true)
            mensaje='Todos los campos son obligatorios'
            return
        }

        dispatch( addNewPost(formValues) )
        reset(initialState)
    }
    return (
        <div className='add-post-container' >
            <h3>Agrega Nuevo Post</h3>
            <section>
                <form
                    onSubmit={handleOnSubmit}
                >
                    <TextField 
                        margin='normal'  
                        label="Titulo" 
                        variant="outlined" 
                        fullWidth
                        name='titulo'
                        value={titulo}
                        onChange={handleOnchange} 
                    />
                    <TextField 
                        margin='normal'  
                        label="Descripción" 
                        variant="outlined" 
                        fullWidth
                        name='descripcion'
                        value={descripcion}
                        onChange={handleOnchange}  
                    />

                    <Button 
                        variant="contained"
                        className='custom-btn'
                        endIcon={<AddIcon/>}
                        type='submit'
                    >Agregar Nuevo post</Button>
                    {
                        error && <Alert severity="error" >{mensaje}</Alert>
                    }
                </form>            
            </section>
        </div>
    )
}
