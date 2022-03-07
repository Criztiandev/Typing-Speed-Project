import React, {useEffect, useState} from 'react'

export default function Timer(props) {

    const [timer,setTimer] = useState(0)

    useEffect(() =>{
        let id
        if(props.count){
           id = setInterval(() =>{
                setTimer(prev => prev + 1)
            },1000)
        }

        return ()=>{
            clearInterval(id)
        }
    },[props.count])

    console.log(props.count)
  return (
    <div>{timer}</div>
  )
}
