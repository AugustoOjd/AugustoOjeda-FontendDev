import React from 'react'
import { Box, Center, Stack, Text, Image, Heading } from '@chakra-ui/react'

export const Intro = () => {
    return (
        <>  
            <Box bg='white' w='100%' p={4} borderWidth='1px'>
                <Stack direction={['column', 'row']} spacing='24px'>
                    <Center w='100%' h={{base: 'auto', md: '500px', lg: '600px'}} bg='yellow.200'>
                    <Stack spacing={2}>
                        <Heading fontSize={{base: '3xl', sm: '4xl', lg: '6xl'}} letterSpacing='wider' textAlign={'center'}>Augusto Ojeda</Heading>
                        <Text fontSize={{base: 'xl', sm: '2xl', lg: '4xl'}} fontWeight={500} textAlign='center'>Frontend Developer.</Text>
                        <Text fontSize={{base: 'sm', sm: 'md', lg: 'lg'}} p={1} textAlign='center'>Hola, soy un frontend dev, me considero una persona optimista, trabajadora y creativa. Me gusta el mundo de la inteligencia artificial (AI), la inovacion constante y la web3. Creo en el esfuerzo y aportar siempre caminos para resolver problemas</Text>
                    </Stack>
                    </Center>
                    <Center w='100%'  h={{base: 'auto', md: '500px', lg: '600px'}} bg='tomato'>
                    <Image
                        borderRadius='full'
                        boxSize={{base: '200px', md: '300', lg: '400px'}}
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                        />
                    </Center>
                </Stack>
            </Box>
        </>
    )
}

export default Intro