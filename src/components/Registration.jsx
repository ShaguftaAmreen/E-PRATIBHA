import React, { useState } from 'react';
import Register from './Register';
import ExamList from './ExamList';

function Registration() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    return (
        <div>
            <Register
                email={email}
                setEmail={setEmail}
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                handleRegister={handleRegister}
            />
            <ExamList
                email={email}
                password={password}
                phone={phone}
                confirmPassword={confirmPassword}
                name={name}
            />
        </div>
    );
}

export default Registration;