import { db } from "../firebase/firebase-config";
import { GET_POSTS ,GET_FAVORITE_POST,ADD_FAVORITE_POST, ADD_NEW_POST, GET_PERSONAL_POST} from "../types";
import Swal from 'sweetalert2'
import { getFavoritePost } from "../helpers/getFavoritePost";


export const getLastPost = ()=>{
    return async(dispatch)=>{
        try {
            const url = `https://waco-api.herokuapp.com/api/posts?page=135`;
            const resp = await fetch(url)
            const {data} = await resp.json();
            dispatch(getAllPost(data))            
        } catch (error) {            
        }
    }
}

const getAllPost =(data)=>({
    type:GET_POSTS,
    payload:data
});


export const saveFavoritePost=(data)=>{
    const {id:postId} = data
    return  async(dispatch,getState)=>{
        try {
            const {user} = getState().auth        
            await db.doc(`${user.uid}/${postId}`).set(data)
            Swal.fire({
                title: 'Genial',
                text: `El post fue agregado a tus favoritos`,
                icon: 'success',               
              })
            dispatch( addfavoritePost(data) )
        } catch (error) {
            console.log(error)
        }
    }
}


export const loadFavoritePost =()=>{
    return async(dispatch,getState)=>{
        const {user} = getState().auth;
        const post = await getFavoritePost(user)
        dispatch( favoritePost(post) )
    }
}

const favoritePost =(data)=>({
    type:GET_FAVORITE_POST,
    payload:data
})
const addfavoritePost =(data)=>({
    type:ADD_FAVORITE_POST,
    payload:data
})


export const addNewPost =({titulo,descripcion})=>{
    return async(dispatch,getState)=>{
        const {user} = getState().auth
        const post ={
            title:titulo,
            body:descripcion,
            user_uuid:user.uid
        }
        const url = `https://waco-api.herokuapp.com/api/posts`
        const resp = await fetch(url,{
            method:'POST',
            body: JSON.stringify(post),
            headers:{
                'Content-Type':'application/json'
            }
        });
        Swal.fire({
            title: 'Genial',
            text: `El post fue agregado correctamente`,
            icon: 'success',               
          })
        const {data} = await resp.json()
        dispatch( addPost(data) )
        console.log(data)
    }
}


const addPost=(data)=>({
    type:ADD_NEW_POST,
    payload:data
})

export const GetPostByUser=()=>{
    return async (dispatch,getState)=>{
        const {user} = getState().auth
        const url = `https://waco-api.herokuapp.com/api/users/${user.uid}/post`
        const resp = await fetch(url)
        const {data} = await resp.json()
        console.log(data)
        dispatch( getPersonalPost(data) )
    }
}

const getPersonalPost=(data)=>({
    type:GET_PERSONAL_POST,
    payload:data
})