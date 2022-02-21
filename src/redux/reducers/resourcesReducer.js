import { types } from "../types/types";

/*
    {
        hour:'',
        taken:false
        
    }
    
*/
const initialState = {
    takenHoursByUser:[]
}
export const resourcesReducer = (state=initialState, action) => {
    
    switch (action.type) {
        case types.takeResourse:
            return{
                ...state,
                takenHoursByUser: [ ...state.takenHoursByUser,action.payload ]
            }
        case types.loadResourcesFromUser:
            return{
                ...state,
                takenHoursByUser: [action.payload]
            }
        default:
            return state;
    }
}