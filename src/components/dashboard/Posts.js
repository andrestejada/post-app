import React from 'react'
import { useSelector } from 'react-redux'
import { Post } from './Post'

export const Posts = () => {
    const {post} = useSelector(state => state.post)
    return (
        <div className='post-container' >
            <h3>Ultimos post</h3>
            <section>
                {
                    post.map((p)=>(
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
