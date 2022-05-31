import React from 'react'
import {Box, Stack, Text} from '@chakra-ui/react'
import Formacion1 from './FormacionComponents/Formacion1'
import Formacion2 from './FormacionComponents/Formacion2'
import Formacion3 from './FormacionComponents/Formacion3'

const Formacion = () => {
  return (
    <>
      <Box bg='white' w='100%' p={4} borderWidth='1px'>

      <Text bgGradient='linear(to-l, red.500, #FF0080)' bgClip='text' fontSize={{base: 'xl', sm: '2xl', lg: '5xl'}} fontWeight={'bold'} textAlign='center'>Formación.</Text>

        <Stack direction={{base: 'column', md: 'row'}} spacing='20px' borderWidth='1px' borderColor={'red.500'} p={3}>
                <Box w={{base: '100%', md: '33%'}} h='200px' bg='yellow.200'>
                    <Formacion1/>
                </Box>
                <Box w={{base: '100%', md: '33%'}} h='200px' bg='tomato'>
                    <Formacion2/>
                </Box>
                <Box w={{base: '100%', md: '33%'}} h='200px' bg='pink.100'>
                    <Formacion3/>
                </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Formacion