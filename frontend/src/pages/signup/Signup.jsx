import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const Signup = () => {
  return (
    <div>
      
        <div>
            <h1>Sign Up ChatApp</h1>
        </div>
      
        <form>
            <div>
                <label>
                    <span>Full Name</span>
                </label>
                <input type='text' placeholder="John Doe" className=''/>
            </div>

            <div>
                <label>
                    <span>Username</span>
                </label>
                <input type='text' placeholder='johndoe' className=''/>
            </div>

            <div>
                <label>
                    <span>Password</span>
                </label>
                <input type='password' placeholder='Enter Password' className=''/>
            </div>

            {/* GENDER CHECKBOX GOES HERE */}

            <GenderCheckBox/>

            <a href="">Already have an account?</a>

            <div>
                <button>Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default Signup
