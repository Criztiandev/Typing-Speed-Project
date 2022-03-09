import React, {useRef, useState } from 'react';
import Timer from './components/Timer';
import Word from './components/Word';

const paragraph = "Lorem".split("")

export default function App (){
  const [input,setInput] = useState('')
    const setText = useRef(paragraph)

    const [active,setActive] = useState(0)
    const [correct,setCorrect] = useState([])

    const [startCounting,setstartCounting] = useState(false)


    function processInput(value){

      if(active === setText.current.length){
        return // stop
      }

      if(active === setText.current.length - 1){
        setstartCounting(false)
        // display stats
      }
      
      if(!startCounting){
          setstartCounting(!startCounting)
        }
        // Validation
        // disable click

        //seasion

      setInput(value)
      setActive(active + 1)
      setCorrect(prev =>{
        const result = value === setText.current[active]
        setInput('')
        return [...prev, result]
      })
    }

  return (
    <main>
      <label htmlFor='inputs' className='min-h-[100vh] flex justify-center items-center flex-col border border-black'>
            
          <Timer
            count = {startCounting}
            correctWords = {correct.filter(e => e).length} // ad combo
          />

        <div className="container border border-black w-[500px] mb-5">
                {setText.current.map((words,index) =>{
                      return(
                        <Word
                          key = {index}
                          text = {words}
                          active = {index === active}   
                          correct = {correct[index]}  
                      />
                      )
                    })}
          </div>
            <input onChange={(e) => processInput(e.target.value)} value={input} type="text" className='border border-black' autoFocus id='inputs'/>
          <div className="btns">
              <button>Reset</button>
            </div>

       
            </label>
    </main>
  );
}
