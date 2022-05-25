import React, {useEffect} from 'react'
import { Button } from '@chakra-ui/react'
import {BsLinkedin} from 'react-icons/bs'
import { gsap } from 'gsap'

const LinkedinButton = () => {


  useEffect(() => {
    gsap.fromTo( '.button', {duration: 5, scale: 2}, { scale: 1, ease: "power1.out"})
}, [])

  return (
    <>
        <Button className='button' leftIcon={<BsLinkedin/>} colorScheme='red' variant='outline' display={{base: 'none', sm: 'flex'}}>
          <a href='https://www.linkedin.com/in/augustoojedafrontend/'>
            LinkedIn
          </a>
        </Button>
        <Button className='button' colorScheme='red' variant='outline' display={{base: 'flex', sm: 'none'}}>
          <a href='https://www.linkedin.com/in/augustoojedafrontend/'>
            <BsLinkedin/>
          </a>
        </Button>
    </>
  )
}

export default LinkedinButton