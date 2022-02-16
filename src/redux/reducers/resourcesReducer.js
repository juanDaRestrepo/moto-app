/*
    {
        hour:'',
        taken:false
        
    }
    
*/
const initialState = {
    takenHoursByUser:[],
    hours:[]
}
export const resourcesReducer = (state=initialState, action) => {
    
    switch (action.type) {

        default:
            return state;
    }
}