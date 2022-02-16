import React, { useEffect } from 'react'
import { Route, Routes,BrowserRouter} from 'react-router-dom';
import {firebase} from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux';

import { LoginScreen } from '../components/auth/LoginScreen'
import { MotoScreen } from '../components/moto/MotoScreen'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { login } from '../redux/actions/auth';



export const AppRouter = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    
      firebase.auth().onAuthStateChanged((user) => {
        
        if(user?.uid){
          dispatch(login(user.uid, user.email))
        }
        
      })
    
  }, [dispatch])
  
  return (
    <BrowserRouter>
       
         <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>        
                        
                    } 
                />
                <Route path="/*" element={
                        <PrivateRoute>
                            <MotoScreen />
                        </PrivateRoute>
                        
                        } 
                />
            </Routes>
    </BrowserRouter>
  )
}
