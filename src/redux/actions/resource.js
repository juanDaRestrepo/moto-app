
import  {db}   from "../../firebase/firebaseConfig";
import { loadHours } from "../../helpers/loadHours";
import { types } from "../types/types";






export const startTakeResource = (hour,hours) => {
    return async( dispatch, getState ) =>{
        const uid = getState().auth.uid
        
         if(hours.indexOf(hour)===-1){
            const hours ={
                hour:hour,
                active: true
            }
           
            await db.collection(`${uid}/resources/hours`).add(hours);
            dispatch(takeResource(hours));
         }   
    }
}

export const loadHoursFromUser = () => {
    return async(dispatch, getState) =>{
        const uid = getState().auth.uid
        const takenHours = await loadHours(uid);
        console.log(takenHours);
        dispatch(loadResourcesFromUser(takenHours));
    }
}

export const loadResourcesFromUser = (takenHours) => {
    console.log(takenHours);
    return{
        type: types.loadResourcesFromUser,
        payload:takenHours
    }
}
export const takeResource = (hours) =>({
    type: types.takeResourse,
    payload: hours
})


export const changeGeneralStateOfHours = () => {
    return async( dispatch, getState ) =>{
        /* idea *****--****  await db.collection(`hours/${hour}`).add(hours); */
    }
}



