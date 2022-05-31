import React, {useEffect} from 'react'
import { Box, Center, Stack, Text, Image, Heading, Divider, Circle } from '@chakra-ui/react'
import { gsap } from 'gsap'

export const Intro = () => {


    useEffect(() => {
        
        gsap.fromTo(".foto", {rotateY: 180},  {rotateY: 0, duration: 1.5, ease: "power2.out", yoyo: true})
        // gsap.to(".text", {duration: 2, delay: 2, text: "This is the new text", ease: "none"});

    }, [])
    
    
    return (
        <>  
            <Box bg={'white'} bgRepeat={'no-repeat'} bgSize={'cover'} w='100%' p={4} mb={10}>
                <Stack direction={{base: 'column', md: 'row'}} spacing='24px'>
                    <Center w='100%' h={{base: '300px', md: '500px', lg: '600px'}} px={5}>
                    <Stack spacing={2}>
                        <Heading bgGradient='linear(to-l, red.500, #FF0080)' bgClip='text' fontFamily={'sans-serif'} fontWeight={'bold'} fontSize={{base: '3xl', sm: '4xl', lg: '7xl'}} letterSpacing='wider' textAlign={'center'}>Augusto Ojeda</Heading>
                        <Text bgGradient='linear(to-l, orange.400, red.500)'  bgClip='text' fontFamily={'sans-serif'} fontSize={{base: 'xl', sm: '2xl', lg: '4xl'}} fontWeight={'semibold'} textAlign='center'>Frontend Developer.</Text>
                        <Text className='text' fontFamily={'mono'} fontSize={{base: 'sm', sm: 'md', lg: 'lg'}} p={1} textAlign='center'>Hola, soy un frontend dev, me considero una persona optimista, trabajadora y creativa. Me gusta el mundo de la inteligencia artificial (AI), la inovacion constante y la web3. Creo en el esfuerzo y aportar siempre caminos para resolver problemas</Text>
                    </Stack>
                    </Center>
                    <Center w='100%'  h={{base: '300px', md: '500px', lg: '600px'}}>
                        <Circle p={{base: 6, xl: 10}} border={'1px'} borderColor={'red.500'}>
                            <Circle className='foto' p={{base: 4, xl: 8}} border={'1px'} borderColor={'red.500'} borderStyle={'dashed'}>
                                <Image
                                borderRadius='full'
                                boxSize={{base: '200px', md: '300', lg: '400px'}}
                                src='https://bit.ly/dan-abramov'
                                alt='Dan Abramov'
                                />
                            </Circle>
                        </Circle>
                    </Center>
                </Stack>
            </Box>
            <Divider/>
        </>
    )
}

export default Intro