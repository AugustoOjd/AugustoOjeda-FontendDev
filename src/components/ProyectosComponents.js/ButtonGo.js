import React from 'react'
import { Button } from '@chakra-ui/react'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import { gsap } from 'gsap'

const ButtonGo = () => {

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1.02, duration: 0.2 });
      };
      
      const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1, duration: 0.2 });
      };
return (
    <>
        <Button onMouseEnter={onEnter} onMouseLeave={onLeave} rightIcon={<BsFillArrowRightSquareFill/>} colorScheme='red' variant='outline'>
            Deploy
        </Button>
    </>
)
}

export default ButtonGo