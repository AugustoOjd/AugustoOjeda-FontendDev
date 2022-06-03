import React from 'react'
import { Circle } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { traslate } from '../reducers/Language'

const EnglishFlag = () => {

  const dispatch = useDispatch()

  const language = useSelector((state)=> state.language.value)

  return (
    <>  
    {      
    
    language

    ?
    
    <Circle size='30px' color='white'>
        <button onClick={()=> dispatch(traslate())}>
          <img src='https://cdn-icons-png.flaticon.com/512/197/197374.png'></img>
        </button>
      </Circle>
      
    :
    
    <Circle size='30px' color='white'>
      <button onClick={()=> dispatch(traslate())}>
        <img src='https://cdn-icons-png.flaticon.com/128/197/197593.png'/>
      </button>
    </Circle>
    }
    </>
  )
}

export default EnglishFlag