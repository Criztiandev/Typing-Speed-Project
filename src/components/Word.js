import React from 'react'

function Word(props) {
    if(props.active){
        return <span className='font-bold underline'>{props.text}</span>
    }
    if(props.correct === true){
        return <span className='text-lime-500 font-bold'>{props.text}</span>
    }

    if(props.correct === false){
        return <span className='text-red-500 font-bold'>{props.text}</span>
    }


    return <span className='text-gray-500'>{props.text}</span>
}

export default React.memo(Word);
