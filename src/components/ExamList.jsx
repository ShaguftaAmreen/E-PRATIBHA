import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Examlist() {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('Token');
    const navigate = useNavigate();
    
    const [examdata, setExamdata] = useState([]);
    const [examId, setExamId] = useState('');

    const handleStart = (examId) => {
        setExamId(examId);
        navigate(`/StartExam/${examId}`);
    };

    const userdata = async () => {
        const response = await fetch('https://e-prathibha.com/apis/test_free_exam', {
            method: 'POST',
            headers: {
                id: id,
                tokenu: token,
                server_key: '3w99V63pW7tJ7vavGXtCKo8cp',
            },
        });
        const res = await response.json();
        setExamdata(res.data.exams);
    };

    useEffect(() => {
        userdata();
    }, []);

    return (
        <>
            {examdata.map((categoryData) => {
                const category = Object.keys(categoryData)[0]; // Get the category name
                const exams = categoryData[category]; // Get the exams for this category

                return (
                    <div key={category}>
                        <h1 id="heading">{category}</h1>
                        {exams.map((exam) => (
                            <div className='old' key={exam.Exam.id}>
                                <h2>id: {exam.Exam.id}</h2>
                                <p>name: {exam.Exam.name}</p>
                                <button className='btn btn-info' onClick={() => handleStart(exam.Exam.id)}>Start Exam</button>
                            </div>
                        ))}
                    </div>
                );
            })}
        </>
    );
}

export default Examlist;