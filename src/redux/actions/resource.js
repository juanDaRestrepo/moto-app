import { db  } from "../../firebase/firebaseConfig";
// Create a reference to the cities collection
import { collection, query, where } from "firebase/firestore";

export const startTakeResource = (hour) => {
    return async( dispatch, getState ) =>{
        const uid = getState().auth.uid
       
        const hours ={
            hour:hour
        }
        const doc =await db.collection(`${uid}/resources/hours`).add(hours)
        console.log(doc);
    }
}

export const takeResource = (hour) =>{

}