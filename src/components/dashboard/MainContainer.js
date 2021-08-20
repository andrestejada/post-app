import React from 'react'
import { AddPost } from './addPost'
import { FavoritePosts } from './FavoritePosts'
import { PersonalPost } from './PersonalPost'
import { Posts } from './Posts'

const MainContainer = () => {
    return (
        <div className='main-container' >
            <AddPost/>
            <FavoritePosts/>
            <Posts/>
            <PersonalPost/>
        </div>
    )
}

export default MainContainer
