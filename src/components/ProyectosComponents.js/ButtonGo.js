import React from 'react'
import { Button } from '@chakra-ui/react'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import { gsap } from 'gsap'
import { useSelector } from 'react-redux'

const ButtonGo = () => {

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1.02, duration: 0.2 });
      };
      
      const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1, duration: 0.2 });
      };

      const theme = useSelector((state)=> state.theme.value)
return (
    <>
        {
            
            theme 
            
            ?
            
            <Button onMouseEnter={onEnter} onMouseLeave={onLeave} rightIcon={<BsFillArrowRightSquareFill/>} colorScheme='red' variant='outline'>
                Deploy
            </Button>
        
            :
            
            <Button onMouseEnter={onEnter} onMouseLeave={onLeave} rightIcon={<BsFillArrowRightSquareFill/>} colorScheme='red' variant='solid' bgGradient='linear(to-l, #7928CA, #FF0080)'>
                Deploy
            </Button>
        }
    </>
)
}

export default ButtonGo