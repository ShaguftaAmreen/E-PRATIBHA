import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
function Register() {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !password || !confirmPassword || !phone) {
      setMessage('Please enter all the details.');
      return
    
    }

    let userData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      phone: phone
    }
    let response = await fetch('https://e-prathibha.com/apis/register', {
      method: 'POST', headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    let res = await response.json();
    console.log(res)
    if (res.status === 200) {
      localStorage.setItem("codemessage", res.data)
      navigate("/verify")

      setMessage(res.data)

    } else {
      setMessage("User Already Exists")  //call from api itself
    }



  }


  return (
    <>
      <h1 id="title">Welcome to E-PRATIBHA</h1>
      <div id="register">
        <form action="">
          <div id="register-child">
            <h1>Register Form</h1>
            <br />
            <br />
            Email:<input type="email" onChange={(e) => {
              setEmail(e.target.value)
            }} required />
            <br />
            <br />
            Name:<input type="text" onChange={(e) => {
              setName(e.target.value)
            }} />
            <br />
            <br />
            Phone:<input type="phone"  onChange={(e) => {
              setPhone(e.target.value)
            }} />
            <br />
            <br />
            Password:<input type="password" onChange={(e) => {
              setPassword(e.target.value)
            }} />
            <br />
            <br />
            Confirm Password:<input type="text" onChange={(e) => {
              setConfirmPassword(e.target.value)
            }} />
            <br />
            <br />
            <button className='btn btn-info' id="register-btn" onClick={handleSubmit}>Register</button>
            <br />
            <br />
            <p>Already Registered <Link to="/login">Login</Link></p>
            <p style={{ color: "red", fontSize: "large" }}>{message}</p>
          </div>



        </form>

      </div>

    </>
  )
}

export default Register;