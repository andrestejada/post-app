import { db } from "../firebase/firebase-config";

export const getFavoritePost =async(user)=>{    
    try {            
        const resp = await db.collection(`${user.uid}`).get()
        
        let post = [];
        resp.forEach((doc)=>{
            post.push( doc.data())
        })
        console.log(post)
        return post;               
    } catch (error) {
        console.log(error)
    }    
};