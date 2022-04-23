import React from 'react'
import {Box, Stack, Text} from '@chakra-ui/react'
import Proyecto1 from './ProyectosComponents.js/Proyecto1'
import Proyecto2 from './ProyectosComponents.js/Proyecto2'
import Proyecto3 from './ProyectosComponents.js/Proyecto3'

const Proyectos = () => {
return (
    <>
        <Box bg='white' w='100%' p={4} borderWidth='1px'>
            
            <Text fontSize={{base: 'xl', sm: '2xl', lg: '4xl'}} fontWeight={500} textAlign='center'>Proyectos.</Text>

            <Stack direction={{base: 'column', md: 'row'}} spacing='30px' borderWidth='1px' borderColor={'red.500'} p={3} paddingX={'20px'} marginX={5}>


            <Stack direction={'column'} spacing='1px' w={{base: '100%', md: '33%'}}>
                {/* PROYECTO NRO 1 */}
                <Proyecto1/>
            </Stack>

            <Stack direction={'column'} spacing='1px' w={{base: '100%', md: '33%'}}>
                {/* PROYECTO NRO 2 */}
                <Proyecto2/>
            </Stack>

            <Stack direction={'column'} spacing='1px' w={{base: '100%', md: '33%'}}>
                {/* PROYECTO NRO 2 */}
                <Proyecto3/>
            </Stack>

                {/* <Box w={{base: '100%', sm: '33%'}} h='400px' bg='yellow.200'>
                    <Image
                        w={'100%'}
                        h={'50%'}
                        // objectFit='cover'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                    />

                <HStack spacing='10px' p={2} display={'flex'} justifyContent='center'>
                    <Circle size='40px' bg='tomato' color='white'>
                        <IoLogoJavascript/>
                    </Circle>
                    <Circle size='40px' bg='tomato' color='white'>
                        <SiReact/>
                    </Circle>
                    <Circle size='40px' bg='tomato' color='white'>
                        <SiNextdotjs/>
                    </Circle>
                </HStack>


                        <Text fontSize={{base: 'xs', sm: 'sm', lg: 'md'}} p={1} textAlign='center'>Hola, soy un frontend dev, me considero una persona optimista, trabajadora y creativa. Me gusta el mundo de la inteligencia artificial (AI)</Text>

                    
                <Flex p={1}>
                    <Spacer/>
                    <GithubButton/>
                </Flex>
                
                
                </Box>





                <Box w={{base: '100%', sm: '33%'}} h='400px' bg='tomato'>
                    2
                </Box>
                <Box w={{base: '100%', sm: '33%'}} h='400px' bg='pink.100'>
                    3
                </Box> */}
            </Stack>

        </Box>
    </>
)
}

export default Proyectos