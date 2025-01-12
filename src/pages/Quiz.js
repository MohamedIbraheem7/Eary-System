import React, { useEffect } from 'react'
import Questions from './Questions'
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion'
import { PushAnswer } from '../hooks/setResult'

/** redux store import */
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'


export default function Quiz() {
  
    const [check, setChecked] = useState(undefined) // hna 3shan ysgl answer bta3y
    
    const result = useSelector(state => state.result.result);
    const {queue , trace} = useSelector(state => state.questions);
    const dispatch = useDispatch()

   
  /** next button event */
  function onNext(){
  
    if(trace < queue.lenght){
        
      /** update trace value by one using  MoveNextQuestion */
        dispatch( MoveNextQuestion());

         /** insert a new result in the array. lma afdl aghir fe result misglsh kol altghirat ysgl elgwab elnh2y bs */
         if(result.length <= trace){
          dispatch(PushAnswer(check))  // hna 3shan ysgl answer bta3y
      }
    }
         /** reset the value of the checked variable, law fe so2l mttgwbsh 3leh yzhrlo undefined*/
         setChecked(undefined)
  
  }
  /** prev button event */
  function onPrev(){
    if(trace > 0){ 

    /** decrease trace value by one using  MovePrevQuestion */
    dispatch( MovePrevQuestion()); 
      }
  }

  function onChecked(check){
    console.log(check)
    setChecked(check)
}

    /** finished exam after the last question */
    if(result.length && result.length >= queue.length){
      return <Navigate to={'/result'} replace={true}></Navigate>
  }


  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

    

    {/* display questions */}
    <Questions onChecked={onChecked}/>

    <div className='grid'>
      {/** ? ==> If And Only If , khlet button bta3 prev mizhrsh gher lma ykon fe page ablha */}
    { trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
      <button className='btn next' onClick={onNext}>Next</button>

    </div>
    </div>
    
    
  )
}
