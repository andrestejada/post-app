import { auth, provider } from "../firebase/firebase-config"
import { LOGIN_SUCCESS,LOGOUT_SUCCESS } from "../types"


export const signInAction =(email,password)=>{
    return async(dispatch)=>{
        try {
            const {user} = await auth.signInWithEmailAndPassword(email,password);
            dispatch( loginSuccess(user) )
        } catch (error) {
            if(error.code){
                console.log(error)
                return 'Esta direccion de correo no existe, intenta con otra'
            }            
        }
    }
}

export const loginSuccess=(user)=>({
    type:LOGIN_SUCCESS,
    payload:user
})


export const RegisterUser =(email,password)=>{
    return async (dispatch)=>{
       try {
        const {user} = await auth.createUserWithEmailAndPassword(email,password)
        console.log(user)
        dispatch( loginSuccess(user) )
       } catch (error) {
           if(error.code){
               console.log(error)
               return 'Esta direccion de correo ya existe, intenta con otra'
           }
       }
    }
}

export const signOut =()=>{
    return async(dispatch)=>{
        try {
            await auth.signOut()
            dispatch( signOutUser() )
        } catch (error) {
            console.log(error)
        }
    }
};

const signOutUser=()=>({
    type:LOGOUT_SUCCESS
})

export const signInWithGoogle=()=>{
    return async(dispatch)=>{
        try {
            const {user} = await auth.signInWithPopup(provider)
            dispatch(loginSuccess(user))
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }
}