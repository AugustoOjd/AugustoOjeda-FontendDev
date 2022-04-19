import React from 'react'
import { Button } from '@chakra-ui/react'
import { SiGithub } from "react-icons/si"

const GithubButton = () => {
  return (
    <>
    <Button leftIcon={<SiGithub/>} colorScheme='red' variant='outline' display={{base: 'none', sm: 'flex'}}>
        GitHub
    </Button>
    <Button colorScheme='red' variant='outline' display={{base: 'flex', sm: 'none'}}>
        <SiGithub/>
    </Button>
    </>
)
}

export default GithubButton