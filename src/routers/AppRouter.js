import React from 'react'
import { Route, Routes,BrowserRouter, Navigate } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { MotoScreen } from '../components/moto/MotoScreen'


export const AppRouter = () => {
  return (
    <BrowserRouter>
       
        <Routes>
            <Route path="/" element={<MotoScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route
                path="/*"
                element={<Navigate to="/" />}
            />
        </Routes>
    </BrowserRouter>
  )
}
