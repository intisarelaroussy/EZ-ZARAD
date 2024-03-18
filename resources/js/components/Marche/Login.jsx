import React from 'react'

export default function Login() {
  return (
    <div className="wrapper">
   
    <form   method="POST">
      <h1> Login  </h1>
      <span><i className="bi bi-door-open"></i></span>
     
      <div className="input-box">
        <input    type="email" placeholder="Email" name="email"  />
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input  type="password"  placeholder="Password"  />
        <i className='bx bxs-lock-alt' ></i>
      </div>
      <div className="remember-forgot">
        
        <label>Remember Me<input type="checkbox" id="Remember"/></label>
      </div>
      <button  className="btn">Login</button>
      <div className="register-link">
        <p><a href="#" className=" text-danger -bottom-3">Forgot Password</a> </p>
        
      
      </div>
    </form>
  </div>
  )
}
