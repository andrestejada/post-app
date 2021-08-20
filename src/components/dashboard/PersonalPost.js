import { Alert } from '@material-ui/lab'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetPostByUser } from '../../actions/postActions'
import { Post } from './Post'

export const PersonalPost = () => {
    const dispatch = useDispatch();
    useEffect(() => {                
        dispatch( GetPostByUser())
    }, [dispatch])
    const {personalPost} = useSelector(state => state.post)
    if(personalPost.length ===0) return <Alert severity="info" >No tienes Post agrega alguno</Alert>
    return (
        <div className='post-container' >
            <h3>Todos Tus Posts</h3>
            <section>
                {
                    personalPost.map((p)=>(
                        <Post
                            key={p.id}
                            title={p.title}
                            body={p.body}
                            id={p.id}
                        />
                    ))
                }
            </section>
        </div>
    )
}
