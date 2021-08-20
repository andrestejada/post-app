import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadFavoritePost } from '../../actions/postActions'
import { Post } from './Post'
import { Alert } from '@material-ui/lab'

export const FavoritePosts = () => {
    const dispatch = useDispatch()
    const {favoritePost} = useSelector(state => state.post)

    useEffect(() => {
        dispatch(loadFavoritePost())       
    }, [dispatch])
    if(favoritePost.length ===0) return <Alert  severity="info" >No tienes Post Favoritos agrega alguno</Alert>
    return (
        <div className='favorite-post-container' >
            <h3>Tus posts favoritos</h3>

            <section>
               {
                    favoritePost.map((p)=>(
                        <Post
                            key={p.id}
                            title={p.title}
                            body={p.body}
                            id={p.id}
                            favorite={true}
                        />
                    ))
               }
            </section>
        </div>
    )
}
