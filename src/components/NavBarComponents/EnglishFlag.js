import React from 'react'
import { Button } from '@chakra-ui/react'
import { FaFlagUsa } from "react-icons/fa"

const EnglishFlag = () => {
  return (
    <>
      <Button leftIcon={<FaFlagUsa/>} colorScheme='pink' variant='solid'>
        English
    </Button>
    </>
  )
}

export default EnglishFlag