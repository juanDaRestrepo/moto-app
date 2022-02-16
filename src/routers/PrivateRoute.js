import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

export const PrivateRoute = ({children}) => {

    
    const {email} = useSelector(state => state.auth);
   
    console.log(email);
    
    return email
        ? children
        : <Navigate to="/login"/>
};
