import React from 'react'
import {Box, Stack, Text} from '@chakra-ui/react'
import Formacion1 from './FormacionComponents/Formacion1'
import Formacion2 from './FormacionComponents/Formacion2'
import Formacion3 from './FormacionComponents/Formacion3'
import Formacion4 from './FormacionComponents/Formacion4'

const Formacion = () => {
  return (
    <>
      <Box bg='white' w='100%' h={'auto'} p={4} borderWidth='1px'>

      <Text bgGradient='linear(to-l, red.500, #FF0080)' bgClip='text' fontSize={{base: 'xl', sm: '2xl', lg: '5xl'}} fontWeight={'bold'} textAlign='center'>Formación.</Text>

        <Stack direction={{base: 'column', md: 'row'}} spacing='20px' h={{ base: '600px', md: 'auto'}} borderWidth='1px' borderColor={'red.500'} borderRadius={'base'} p={10} mb={5}  mx={{base: '20px', sm: '60px', lg: '150px', xl: '205px'}} overflow={'auto'}>
              
                <Box  h='auto' bg={{base: 'white'}} boxShadow='base' borderRadius={'md'}>
                  <a href='https://www.coderhouse.com/certificados/61be7e464affad0048479c29'>
                    <Formacion1/>
                  </a>
                </Box>

                <Box h='auto' bg={{base: 'white'}} boxShadow='base' borderRadius={'md'}>
                  <a href='https://www.coderhouse.com/certificados/622123c67254050053f73836'>
                    <Formacion2/>
                  </a>
                </Box>
                <Box h='auto' bg={{base: 'white'}} boxShadow='base' borderRadius={'md'}>
                    <Formacion3/>
                </Box>
                <Box h='auto' bg={{base: 'white'}} boxShadow='base' borderRadius={'md'}>
                    <Formacion4/>
                </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Formacion