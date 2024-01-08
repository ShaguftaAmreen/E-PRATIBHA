import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [msg, setmsg] = useState("");
 
  
    const [login, setLogin] = useState(" ");

    const handleLogin = async (e) => {
        e.preventDefault();
        if(email===""||password==="")
        {
            setLogin("Please enter the valid details");
            return;
        }
        let userData = {
            email: email,
            password: password
        };

        let response = await fetch("https://e-prathibha.com/apis/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(userData)
        });

        let res = await response.json();
        console.log(res);
    
        if (res.status === 200) {
            localStorage.setItem('id', res.data.Id);
            localStorage.setItem('Token', res.data.Token);
            
            navigate("/examlist")
            setLogin(res.data.Message);
           
        } else {
            setLogin("Login Failed");
        }
    };

    return (
        <>
        <h1 id="title">Welcome to E-PRATIBHA</h1>
            <div id="login">
                <form>
                    <div id="login-child">
                
                        <h1>Login Form</h1>
                        <br />
                        <br />
                        <label>Email: {"\u00A0"} </label>
                        <input id="email"  type="email" placeholder='Email' onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                        <br />
                        <br />
                        <br />

                        <label>Password:  {"\u00A0"}  {"\u00A0"} </label>
                        <input id="password" type="password" placeholder='Password' onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                        <br />
                        <br />
                        <br />
                        <button id="login-btn" className='btn btn-info' onClick={handleLogin}>Login</button>
                        <br />
                        <br />
                        <p>Don't have an account <Link to="/register">Register</Link></p>
                        <p>{login}</p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Home;