import React from 'react'
import { Circle } from '@chakra-ui/react'
import {BsMoonFill} from 'react-icons/bs'
import { useState } from 'react'
import {BsFillSunFill} from 'react-icons/bs'


const DarkMode = () => {

const [Logo, setLogo] = useState(false)

const darkM = ()=>{
    setLogo(!Logo)
}


    return (
    <>
        <Circle size='35px' bg='white' color='red.500' borderWidth='1px' borderColor={'red.300'}>
            <button onClick={darkM}>
                {Logo ? <BsFillSunFill/> : <BsMoonFill/> }
            </button>
        </Circle>
    </>
)
}


export default DarkMode