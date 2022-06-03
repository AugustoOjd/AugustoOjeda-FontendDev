import React, {useEffect} from 'react'
import { Box, Center, Stack, Text, Image, Heading, Divider, Circle } from '@chakra-ui/react'
import { gsap } from 'gsap'
import { useSelector } from 'react-redux'
import galaxyAll from './assets/galaxyAll.jpg'

export const Intro = () => {


    useEffect(() => {
        
        gsap.fromTo(".foto", {rotateY: 180},  {rotateY: 0, duration: 1.5, ease: "power2.out", yoyo: true})
        // gsap.to(".text", {duration: 2, delay: 2, text: "This is the new text", ease: "none"});
    }, [])

    const theme = useSelector((state)=> state.theme.value)
    
    
    return (
        <>  
        {   
        
        theme

        ?

// light
        <Box bg={'white'} bgRepeat={'no-repeat'} bgSize={'cover'} w='100%' borderBottomWidth={'1px'} p={4} pb={10}>
                <Stack direction={{base: 'column', md: 'row'}} spacing='24px' mb={10}>
                    <Center w='100%' h={{base: '300px', md: '500px', lg: '600px'}} px={5}>
                    <Stack spacing={2}>
                        <Heading bgGradient='linear(to-l, red.500, #FF0080)' bgClip='text' fontFamily={'sans-serif'} fontWeight={'extrabold'} fontSize={{base: '3xl', sm: '4xl', lg: '7xl'}} letterSpacing='wider' textAlign={'center'}>Augusto Ojeda</Heading>
                        <Text bgGradient='linear(to-l, orange.400, red.500)'  bgClip='text' fontFamily={'sans-serif'} fontSize={{base: 'xl', sm: '2xl', lg: '4xl'}} fontWeight={'semibold'} textAlign='center'>Frontend Developer.</Text>
                        <Text textShadow={'base'} className='text' fontFamily={'mono'} fontSize={{base: 'sm', sm: 'md', lg: 'lg'}} p={1} textAlign='center'>Hola, soy un frontend dev, me considero una persona optimista, trabajadora y creativa. Me gusta el mundo de la inteligencia artificial (AI), la inovacion constante y la web3. Creo en el esfuerzo y aportar siempre caminos para resolver problemas</Text>
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
            
            :
// Dark

// fondo1: https://media.istockphoto.com/vectors/retro-80s-background-vector-id906777136?k=20&m=906777136&s=170667a&w=0&h=yAa9CYeiorDIxRz9mibpyCXdZSqN6qkEKD6ISPFnjyw=
// https://www.xtrafondos.com/en/descargar.php?id=4465&resolucion=1920x1080

            <Box bgImage={galaxyAll} bgRepeat={'no-repeat'} bgSize={'cover'} h={{base: '700px', sm: '700px', md: '600px', lg: '700px', xl: '800px'}}  w='100%' p={4} pb={10}>
                <Stack direction={{base: 'column', md: 'row'}} spacing='24px' mb={10}>
                    <Center w='100%' h={{base: '300px', md: '500px', lg: '600px'}} px={5}>
                    <Stack spacing={2}>
                        <Heading bgGradient='linear(to-l,  #7928CA, #FF0080)' bgClip='text' fontFamily={'sans-serif'} fontWeight={'extrabold'} fontSize={{base: '3xl', sm: '4xl', lg: '7xl'}} letterSpacing='wider' textAlign={'center'}>Augusto Ojeda</Heading>
                        <Text bgGradient='linear(to-r, #1bbdcb, #FF0080)'  bgClip='text' fontFamily={'sans-serif'} fontSize={{base: 'xl', sm: '2xl', lg: '4xl', xl: '5xl'}} fontWeight={'semibold'} textAlign='center'>Frontend Developer.</Text>
                        <Text textShadow={'base'} color={'white'} fontFamily={'mono'} fontSize={{base: 'sm', sm: 'md', lg: 'lg'}} p={1} textAlign='center'>Hola, soy un frontend dev, me considero una persona optimista, trabajadora y creativa. Me gusta el mundo de la inteligencia artificial (AI), la inovacion constante y la web3. Creo en el esfuerzo y aportar siempre caminos para resolver problemas</Text>
                    </Stack>
                    </Center>
                    <Center w='100%'  h={{base: '300px', md: '500px', lg: '600px'}}>
                        <Box borderRadius={'lg'} transform={'rotate(-15deg)'} p={{base: 2, xl: 0}} bgGradient='linear(to-l, #7928CA, #FF0080)'>
                            <Box borderRadius={'xl'} transform={'rotate(10deg)'} p={{base: 6, xl: 8}} bgGradient='linear(to-bl, #5609a3, #7928CA, #FF0080)'>
                                <Box transform={'rotate(5deg)'} bgColor={'white'} borderRadius='md' p={0.5}>
                                    <Image
                                    borderRadius='md'
                                    boxSize={{base: '150px', sm: '200px', md: '200px', lg: '300px', xl: '350px'}}
                                    src='https://bit.ly/dan-abramov'
                                    alt='Dan Abramov'
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Center>
                </Stack>
            </Box>
            }
        </>
    )
}

export default Intro