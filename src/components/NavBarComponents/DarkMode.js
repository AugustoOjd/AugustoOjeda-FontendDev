import React from 'react'
import { Circle } from '@chakra-ui/react'
import {BsMoonFill} from 'react-icons/bs'

const DarkMode = () => {
return (
    <>
        <Circle size='35px' bg='white' color='red.500' borderWidth='1px' borderColor={'red.300'}>
            <button>
                <BsMoonFill/>
            </button>
        </Circle>
    </>
)
}

export default DarkMode