import React from 'react'

const Login = () => {
  return (
    <div>
      <div>
        <h1>Login</h1>
            <span>ChatApp</span>
      </div>


      <form>

        <div>
        <label>
            <span>Username</span>
        </label>
        <input type="text" placeholder="Enter Username" className= "w-full input input-bordered h-18"/>
        </div>

        <div>
            <label>
            <span>Password</span>
            </label>
        <input 
            type="password"
            placeholder="Enter Pasword"
            className=''/>
        </div>
        <a href="#">Don't have an account?</a>


        <div>
            <button>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
