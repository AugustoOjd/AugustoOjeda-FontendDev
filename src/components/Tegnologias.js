import React from 'react'
import {Box, Center, HStack, Text} from '@chakra-ui/react'


const Tegnologias = () => {
  return (
    <>
        <Box bg='white' w='100%' p={4} borderWidth='1px'>

        <Text fontSize={{base: 'xl', sm: '2xl', lg: '4xl'}} fontWeight={500} textAlign='center'>Tegnologias.</Text>

            <Center bg='tomato' h='100px' color='white'>
                <HStack spacing='24px'>
                    <Box w='40px' h='40px' bg='pink.100'>
                        <img src='https://www.atodocurso.com/sites/default/files/html.png' />
                    </Box>
                    <Box w='40px' h='40px' bg='pink.100'>
                        <img src='https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png' />
                    </Box>
                    <Box w='40px' h='40px' bg='yellow.200'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' />
                    </Box>
                    <Box w='40px' h='40px' bg='blue.200'>
                        <img src='http://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png' />
                    </Box>
                </HStack>
            </Center>
            <Center bg='tomato' h='100px' color='white'>
                <HStack spacing='24px'>
                    <Box w='40px' h='40px' bg='pink.100'>
                        <img src='https://cdn-icons-png.flaticon.com/512/919/919825.png' />
                    </Box>
                    <Box w='40px' h='40px' bg='pink.100'>
                        <img src='https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png' />
                    </Box>
                    <Box w='40px' h='40px' bg='pink.100'>
                        <img src='https://toppng.com/uploads/preview/9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png' />
                    </Box>
                    <Box w='40px' h='40px' bg='pink.100'>
                        <img src='https://e7.pngegg.com/pngimages/747/798/png-clipart-mysql-mysql.png' />
                    </Box>
                </HStack>
            </Center>
        </Box>
    </>
  )
}

export default Tegnologias