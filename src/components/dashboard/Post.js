import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { saveFavoritePost } from '../../actions/postActions';

const PostBox= styled.div`
    background-color: #000;
    border: transparent;
    border-radius: 15px;
    max-width: 48%;
    padding: 1em;
    @media (max-width:600px) {
        max-width: 100%;
    } 

    h5{
        font-weight: bold;
        text-transform: capitalize;
        font-size: 1.5em;       
    }

    p{
        font-size: 0.8em;
        margin: 10px 0;
    }
`

export const Post = ({title,body,id,favorite}) => {
    const dispatch = useDispatch()
    const data={
        title,
        body,
        id
    }
    return (
        <PostBox>            
            <h5>{title}</h5>
            <hr/>  
            <p>{body}</p>

            {
                favorite 
                    ?null
                    :<Button
                    variant="contained"                
                    className='custom-btn'
                    size="small"
                    startIcon={<FavoriteIcon />}
                    onClick={ ()=> dispatch(saveFavoritePost(data)) }
                >Agregar a favoritos</Button>
            }
                            
        </PostBox>
    )
}
