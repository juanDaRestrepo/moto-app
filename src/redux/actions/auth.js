import { types } from '../types/types';
import {firebase, googleAuthProvider} from '../../firebase/firebaseConfig';


export const startGoogleLogin = () => {
    return (dispatch) =>{
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user })=> {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}

export const startLoginEmailPassword = (email, password) =>{
    
    return ( dispatch) => {
        console.log("Entre aqui")
        firebase.auth().signInWithEmailAndPassword( email, password)
            .then(({user})=> {
                console.log(user.uid, user.email);
                dispatch(
                    login(user.uid, user.email)
            
                )
                  
            })
            .catch( e => {
                console.log(e)
                
            })
    }
}

export const login = (uid, email) => ({
    type: types.login,
    payload: {
        uid,
        email,
    }
})

export const startLogout = () => {
    return async(dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout())
    }

}

export const logout = () =>({
    type: types.logout
})