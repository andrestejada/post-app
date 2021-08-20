import { GET_POSTS,GET_FAVORITE_POST,ADD_FAVORITE_POST ,GET_PERSONAL_POST, ADD_NEW_POST} from "../types";

const initialState={
    post:[],
    favoritePost:[],
    personalPost:[]
}


export const postReducer =(state=initialState,action)=>{
    switch (action.type) {
        case GET_POSTS:            
            return {
                ...state,
                post:action.payload
            };
        case GET_FAVORITE_POST:
            return{
                ...state,
                favoritePost:action.payload
            }
        case ADD_FAVORITE_POST:
            return{
                ...state,
                favoritePost:[...state.favoritePost,action.payload]
            }
        case GET_PERSONAL_POST:
            return{
                ...state,
                personalPost:action.payload
            }
        case ADD_NEW_POST:
            return{
                ...state,
                personalPost:[...state.personalPost,action.payload]
            }    
        default:
            return state;
    }
}