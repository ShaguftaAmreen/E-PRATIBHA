import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Verify() {


    const navigate = useNavigate()
    const [code, setCode] = useState("")
    const [verify, setVerify] = useState("")
    const displaycode = localStorage.getItem("codemessage")
    const handleCode = async (e) => {
        e.preventDefault()
        let userData = {
            reg_code: code
        }
        let response = await fetch('https://e-prathibha.com/apis/verifyEmail', {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        let res = await response.json();
        console.log(res)
        if (res.status === 200) {
            navigate("/login")
            setVerify(res.data.message)
        }
        else {
            setVerify("Please Enter the Valid Code"); //call from api
        }
    }


    return (
        <>
            <h1 id="title">Welcome to E-PRATIBHA</h1>
            <form id="formverify">
                <label id="codelabel">Please Enter the code displayed Below</label>
                <br />
                <input id="verifyinput" type="text" placeholder="Enter the Code" onChange={(e) => { setCode(e.target.value) }} />
                <br />
                <button id="verifybutton" className='btn btn-info' onClick={handleCode}>Verify</button>
                <p style={{ color: "red", textAlign:"center", fontSize:"large" }}>{verify}</p>


            </form>
            <h1 style={{ color: "blue", textAlign:"center" }}>{displaycode}</h1>
        </>
    )
}

export default Verify