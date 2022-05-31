import React, {useEffect} from 'react'
import { Button } from '@chakra-ui/react'
import {BsLinkedin} from 'react-icons/bs'
import { gsap } from 'gsap'


const LinkedinButton = () => {


  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.02, duration: 0.2 });
  };
  
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1, duration: 0.2 });
  };

  return (
    <>
        <Button onMouseEnter={onEnter} onMouseLeave={onLeave} leftIcon={<BsLinkedin/>} colorScheme='red' variant='outline' display={{base: 'none', sm: 'flex'}}>
          <a href='https://www.linkedin.com/in/augustoojedafrontend/'>
            LinkedIn
          </a>
        </Button>
        <Button onMouseEnter={onEnter} onMouseLeave={onLeave} colorScheme='red' variant='outline' display={{base: 'flex', sm: 'none'}}>
          <a href='https://www.linkedin.com/in/augustoojedafrontend/'>
            <BsLinkedin/>
          </a>
        </Button>
    </>
  )
}

export default LinkedinButton