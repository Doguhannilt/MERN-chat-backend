import React, { useState } from 'react'

const useSignup = () => {
    const [loading, setLoading] = useState(false)

    const signup = async ({fullName, username, password, confirmPassword, gender}) => {
        const success = handleInputErrors({fullName, username,password,confirmPassword,gender})

        if(!success) return
        setLoading(true)
        try {
            const res = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify()
            })

            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error.message)
        }
        finally{
            setLoading(false)
        }
    }
  
    return {loading, signup}

}

export default useSignup


function  handleInputErrors({fullName, username,password,confirmPassword,gender}) {
    if(!fullName || !username || !password || !confirmPassword || !!gender){
        alert("Please Fill in All Fields")
    }

    if(password !== confirmPassword) {
        alert("Passwords do not match")
        return false
    }

    if(password.length < 6 ) {
        alert("Password must be at least 6 characters")
        return false
    } 

    return true
}