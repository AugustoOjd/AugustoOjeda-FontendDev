import React from 'react'
import {Box, Center, HStack, Text, IconButton} from '@chakra-ui/react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {BsNewspaper} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <Box bg='white' w='100%' p={4} borderWidth='1px'>
        <Center>
        <HStack spacing='24px'>
          <Box w='40px' h='40px' bg='white'>
          <IconButton
            variant='outline'
            colorScheme='red'
            aria-label='Call Sage'
            fontSize='20px'
            icon={<BsLinkedin />}
          />
          </Box>
          <Box w='40px' h='40px' bg='white'>
          <IconButton
            variant='outline'
            colorScheme='red'
            aria-label='Call Sage'
            fontSize='20px'
            icon={<ImGithub />}
          />
          </Box>
          <Box w='40px' h='40px' bg='white'>
          <IconButton
            variant='outline'
            colorScheme='red'
            aria-label='Call Sage'
            fontSize='20px'
            icon={<BsNewspaper />}
          />
          </Box>
      </HStack>
      
        </Center>
        <Text fontSize='xs' textAlign={'center'} p={1}>© 2022 Augusto Ojeda</Text>
      </Box>
    </>
  )
}

export default Footer