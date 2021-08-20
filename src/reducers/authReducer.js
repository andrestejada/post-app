import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../types";

const initialState={
    isAuth:false,
    loading:false,
    user:{
        uid:null
    }
}


export const authReducer =(state=initialState,action)=>{
    switch (action.type) {
        case LOGIN_SUCCESS:            
            return {
                ...state,
                isAuth:true,
                loading:false,
                user:{
                    uid:action.payload.uid
                }
            } ;
        case LOGOUT_SUCCESS:
            return initialState;    
        default:
            return state;
    }
}
