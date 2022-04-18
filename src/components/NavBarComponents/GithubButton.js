import React from 'react'
import { Button } from '@chakra-ui/react'
import { AiFillGithub } from "react-icons/ai"

const GithubButton = () => {
  return (
    <>
    <Button leftIcon={<AiFillGithub/>} colorScheme='pink' variant='solid'>
        GitHub
    </Button>
    </>
)
}

export default GithubButton