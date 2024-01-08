import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function StartExam() {
    const navigate = useNavigate();
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('Token');
    const [list, setList] = useState([]);
    const [index, setIndex] = useState(0);
    const { examId } = useParams();
    const [qno, setQno] = useState(1);
    const [selectedOption, setSelectedOption] = useState("");
    localStorage.setItem('qno', qno)
    localStorage.setItem('examId', examId);

    const userdata = async () => {
        let response = await fetch(`https://e-prathibha.com/apis/start_exam?examId=${examId}`, {
            method: "GET",
            headers: {
                id: id,
                tokenu: token,
                server_key: '3w99V63pW7tJ7vavGXtCKo8cp',
            }
        });
        let res = await response.json();
        setList(res.data.exam);
        console.log(res);
    }

    useEffect(() => {
        userdata();
    }, []);

    const handleNext = () => {
        if (index < list.length - 1) {
            setIndex(index + 1);
        }
        setQno(qno + 1);
        setSelectedOption("");
    }

    const handleFinish = () => {
        navigate("/ExamFinish");
    }

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    }

    return (
        <>
            <div id="body">
                {list.length > 0 && index < list.length && (
                    <div>
                        <h3 style={{ color: "red" }}>Question NO:{qno}</h3>
                        <div id="questions" dangerouslySetInnerHTML={{ __html: list[index].Question.question.above }} />

                        <div>
                            <input
                                id="colorradio"
                                type="radio"
                                name="options"
                                checked={selectedOption === list[index].Question.option1}
                                onChange={() => handleOptionChange(list[index].Question.option1)}
                            />
                            <label dangerouslySetInnerHTML={{ __html: list[index].Question.option1 }} />
                        </div>

                        <div>
                            <input
                                id="colorradio"
                                type="radio"
                                name="options"
                                checked={selectedOption === list[index].Question.option2}
                                onChange={() => handleOptionChange(list[index].Question.option2)}
                            />
                            <label dangerouslySetInnerHTML={{ __html: list[index].Question.option2 }} />
                        </div>

                        <div>
                            <input
                                id="colorradio"
                                type="radio"
                                name="options"
                                checked={selectedOption === list[index].Question.option3}
                                onChange={() => handleOptionChange(list[index].Question.option3)}
                            />
                            <label dangerouslySetInnerHTML={{ __html: list[index].Question.option3 }} />
                        </div>

                        <div>
                            <input
                                id="colorradio"
                                type="radio"
                                name="options"
                                checked={selectedOption === list[index].Question.option4}
                                onChange={() => handleOptionChange(list[index].Question.option4)}
                            />
                            <label dangerouslySetInnerHTML={{ __html: list[index].Question.option4 }} />
                        </div>

                        <div>
                            <button className='btn btn-info' onClick={handleNext}>Save&Next</button>
                            <button className='btn btn-info ms-5' onClick={handleFinish}>Finish Exam</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default StartExam;