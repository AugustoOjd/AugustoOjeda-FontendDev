import React from 'react'
import { Circle, Box, Button, IconButton } from '@chakra-ui/react'
import {BsMoonFill} from 'react-icons/bs'
import { useState } from 'react'
import {BsFillSunFill} from 'react-icons/bs'
import { change } from '../reducers/Theme'
import { useDispatch, useSelector } from 'react-redux'


const DarkMode = () => {

const [Logo, setLogo] = useState(true)
const theme = useSelector((state)=> state.theme.value)

const dispatch = useDispatch()

    return (
    <>{
        
        theme

        ?

        <Box>
        <IconButton
            onClick={()=> dispatch(change(setLogo(!Logo)))}
            variant='solid'
            colorScheme="linkedin"
            borderRadius={'3xl'}
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            icon={Logo ? <BsMoonFill/> : <BsFillSunFill/> }
            />
        </Box>
        
        :

        <Box>
        <IconButton
            onClick={()=> dispatch(change(setLogo(!Logo)))}
            variant='solid'
            colorScheme='red'
            borderRadius={'3xl'}
            icon={Logo ? <BsMoonFill/> : <BsFillSunFill/> }
            />
        </Box>

        
        }
    </>
)
}


export default DarkMode