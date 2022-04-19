import React from 'react'
import { Button } from '@chakra-ui/react'
import {BsLinkedin} from 'react-icons/bs'

const LinkedinButton = () => {
  return (
    <>
        <Button leftIcon={<BsLinkedin/>} colorScheme='red' variant='outline' display={{base: 'none', sm: 'flex'}}>
            LinkedIn
        </Button>
        <Button colorScheme='red' variant='outline' display={{base: 'flex', sm: 'none'}}>
          <BsLinkedin/>
        </Button>
    </>
  )
}

export default LinkedinButton