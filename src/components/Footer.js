import React from 'react'
import {Box, Center, HStack, Text} from '@chakra-ui/react'

const Footer = () => {
  return (
    <>
      <Box bg='white' w='100%' p={4} borderWidth='1px'>
        <Center>
        <HStack spacing='24px'>
          <Box w='40px' h='40px' bg='yellow.200'>
            1
          </Box>
          <Box w='40px' h='40px' bg='tomato'>
            2
          </Box>
          <Box w='40px' h='40px' bg='pink.100'>
            3
          </Box>
      </HStack>
      
        </Center>
        <Text fontSize='xs' textAlign={'center'} p={1}>© 2022 Augusto Ojeda</Text>
      </Box>
    </>
  )
}

export default Footer