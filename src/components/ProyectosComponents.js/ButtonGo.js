import React from 'react'
import { Button } from '@chakra-ui/react'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'

const ButtonGo = () => {
return (
    <>
        <Button rightIcon={<BsFillArrowRightSquareFill/>} colorScheme='red' variant='outline'>
            Deploy
        </Button>
    </>
)
}

export default ButtonGo