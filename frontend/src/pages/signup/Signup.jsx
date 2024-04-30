import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const {loading, signup} = useSignup()

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs,gender})
    }

    const handleSubmit =  async (e) => {
        e.preventDefault()
    
        await signup(inputs)
    }

  return (
    <div>
        <div>
            <h1>Sign Up ChatApp</h1>
        </div>
      
        <form onSubmit={handleSubmit}>
            {/* <div>
                <label>
                    <span>Full Name</span>
                </label>
                <input type='text' placeholder="John Doe" className='' value={inputs.fullName} onChange={(e) => {setInputs({...inputs, fullName: e.target.value})}}/>
            </div> */}
            <GenderCheckBox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender}/>

        </form>
    </div>
  )
}

export default Signup
