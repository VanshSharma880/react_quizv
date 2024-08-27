import React from 'react'

export default function StartScreen({numQuestions ,dispatch}) {
  return (
    <div>
        <h2>Welcome To React Quize !</h2>
        <h3>{numQuestions} Question to test your react mastery ?</h3>      
        <button className='btn' onClick={()=>dispatch({type:'start'})}>Get Started</button>  
    </div>
  )
}
