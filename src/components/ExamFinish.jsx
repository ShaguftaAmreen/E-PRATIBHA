import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function ExamFinish() {
    const navigate = useNavigate()
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('Token');
    const qno = localStorage.getItem('qno');

    const examId = localStorage.getItem('examId')
    const [data, setData] = useState("")

    let userdat = {
        examId: examId,
        qno: qno,
    }

    const userdata = async () => {
        let response = await fetch('https://e-prathibha.com/apis/finishExam', {
            method: 'POST', headers: {
                id: id,
                tokenu: token,
                server_key: '3w99V63pW7tJ7vavGXtCKo8cp',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(userdat)
        })
        let res = await response.json()
        setData(res.data)
    }
    useEffect(() => {
        userdata()

    }, [])
    const handlelogin = () => {
        navigate("/examlist")

    }
    return (
        <>
            <h1 id="examfinish">{data}</h1>
            <button className='btn btn-info' onClick={handlelogin}>Go to Exam Page</button>

        </>
    )
}

export default ExamFinish