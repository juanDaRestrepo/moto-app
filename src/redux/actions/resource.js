
import  {db}   from "../../firebase/firebaseConfig";






export const startTakeResource = (hour,hours) => {
    return async( dispatch, getState ) =>{
        const uid = getState().auth.uid
        
         if(hours.indexOf(hour)===-1){
            const hours ={
                hour:hour,
                active: true
            }
            const doc =await db.collection(`${uid}/resources/hours`).add(hours);
            
         }
        
        
    }
}



export const takeResource = (hour) =>{

}