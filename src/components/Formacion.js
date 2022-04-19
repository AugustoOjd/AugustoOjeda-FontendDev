import React from 'react'
import {Box, Stack} from '@chakra-ui/react'

const Formacion = () => {
  return (
    <>
      <Box bg='white' w='100%' p={4} borderWidth='1px'>
        <Stack direction={['column', 'row']} spacing='24px' borderWidth='1px' borderColor={'red.500'} p={3}>
                <Box w={{base: '100%', sm: '33%'}} h='100px' bg='yellow.200'>
                    1
                </Box>
                <Box w={{base: '100%', sm: '33%'}} h='100px' bg='tomato'>
                    2
                </Box>
                <Box w={{base: '100%', sm: '33%'}} h='100px' bg='pink.100'>
                    3
                </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Formacion