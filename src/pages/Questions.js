import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/** Custom Hook */
import { useFetchQestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setResult'

export default function Questions({ onChecked }) {
  
  const [checked, setChecked] = useState(undefined)
  const { trace } = useSelector(state => state.questions);
  const result = useSelector(state => state.result.result);
  const [{ isLoading, apiData, serverError}] = useFetchQestion()
 
  
   //useSelector btrg3ly kol alas2la aly fe data w b7ded eno ykon so2al 1 bs mn queue
   //state.questions.trace : de 3shan ygbly trteb el as2la fe var trace
  const questions = useSelector(state => state.questions.queue[state.questions.trace])
  const dispatch = useDispatch()
  useEffect(() => {
      console.log({trace, checked})
      dispatch(updateResult({ trace, checked}))
  }, [checked])
    
        
        function onSelect(i){
            onChecked(i)
            setChecked(i)
            {/** hna 3shan lma aghir al3lama bta3t answer al3lama elawla ttshal  */}
            dispatch(updateResult({ trace, checked}))

        }

        
    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>

    return (
    
    <div className='questions'>

        {/** ? ==> btgeb value aly gwa question */}
        <h2 className='text-light'>{questions?.question}</h2>
        <ul key={questions?.id}>
            {
                questions?.options.map((q, i) => (
                    <li key={i}>
                        <input 
                            type="radio"
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                        />

                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        {/** hna 3shan lma a3lm 3la result tfdl al3lama mogoda */}
                        <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
                    </li>
                ))
            }
        </ul>
    </div>

  )
}
