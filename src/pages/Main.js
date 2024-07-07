import React, { useRef } from 'react'
import '../style/Main.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserId } from '../redux/result_reducer'



export default function Main() {
  
        const inputRef = useRef(null)
        const dispatch = useDispatch()

// de function  aly btsgl asm al user lma ybd2 alexam  ==> current?
        function startQuiz(){
            if(inputRef.current?.value){
                dispatch(setUserId(inputRef.current?.value))
            }
        }
    
    return (
        <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        <ol>
            <li>You will be asked 10 questions.</li>
            <li>10 points is awarded for the correct answer.</li>
            <li>Each question has three options. You can choose only one options.</li>
            <li>You can review and change answers before the quiz finish.</li>
            <li>The result will be declared at the end of the quiz.</li>
        </ol>

        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
        </form>

        <div className='start'>
        <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div>

    </div>
  )
}
