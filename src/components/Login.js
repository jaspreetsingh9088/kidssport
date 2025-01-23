import React from 'react';
import login from '../assets/images/login.png'
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="Login-page">
        <div className='container'>
        <div className='box-login'>
            <div className='row align-items-center'>
            <div className='col-lg-6'>
            <img src={login} alt="" className="login-images" />
            </div>
            <div className='col-lg-6'>
                <form>
                        <h2>Members Login</h2>
                        <div class="mb-3 mt-3">
 
    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required/>
  </div>
  <div class="mb-3">
   
    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required/>
  </div>
  <button type="submit" class="btn btn-primary-login">Login</button>
  <p className='register-now-btn'>If you're a New User, Please Register first ! <span class="Register-span"> <Link to="/stepform"> Register Now</Link> </span></p>
                </form>
            </div>
            </div>
        </div>
        </div>
</section>

  );
}

export default Login;
