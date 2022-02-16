import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../redux/actions/auth'



export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [ formValues, handleInputChange] = useForm({
    email: 'juan@gmail.com',
    password: '123344'
  }); 
  const {email, password} = formValues;
  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin());
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  }

  return (
    
    <section className="vh-100" style={{backgroundColor: '#508bfc'}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
            <div className="card-body p-5 text-center">
  
              <h3 className="mb-5">Sign in</h3>
  
              <div className="form-outline mb-4">
                <input 
                  type="email" id="typeEmailX-2" 
                  className="form-control form-control-lg" 
                  onChange={handleInputChange}
                  name="email"
                  value={email}
                />
                <label className="form-label" htmlFor="typeEmailX-2">Email</label>
              </div>
  
              <div className="form-outline mb-4">
                <input 
                  type="password" 
                  id="typePasswordX-2" 
                  className="form-control 
                  form-control-lg" 
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
                <label className="form-label" htmlFor="typePasswordX-2">Password</label>
              </div>
  
         
              <div className="form-check d-flex justify-content-start mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  
                  id="form1Example3"
                />
                <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
              </div>
  
              <button 
                className="btn btn-primary btn-lg btn-block" 
                type="submit"
                onClick={handleSubmit}
              >Login</button>
  
              <hr className="my-4" />

              <button className="btn btn-lg btn-block btn-primary" style={{backgroundColor: '#dd4b39'}} type="submit" onClick={handleGoogleLogin}><i className="fab fa-google me-2"></i> Sign in with google</button>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
