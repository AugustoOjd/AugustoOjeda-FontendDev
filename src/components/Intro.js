import React, {useEffect} from 'react'
import { Box, Center, Stack, Text, Image, Heading, Divider, Circle } from '@chakra-ui/react'
import { gsap } from 'gsap'
import { useSelector } from 'react-redux'
import galaxyAll from './assets/galaxyAll.jpg'
import selfie1 from './assets/selfie1.jpeg'
import selfie2 from './assets/selfie2.jpg'
import selfie3 from './assets/selfie3.jpg'
import selfie4 from './assets/selfie4.jpeg'

export const Intro = () => {


    useEffect(() => {
        
        gsap.fromTo(".foto", {rotateY: 180},  {rotateY: 0, duration: 1.5, ease: "power2.out", yoyo: true})
        // gsap.to(".text", {duration: 2, delay: 2, text: "This is the new text", ease: "none"});
    }, [])

    const theme = useSelector((state)=> state.theme.value)
    const language = useSelector((state)=> state.language.value)
    
    
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
                        <Text textShadow={'base'} className='text' fontFamily={'mono'} fontSize={{base: 'sm', sm: 'md', lg: 'lg'}} p={1} textAlign='center'>
                        {
                            
                            language

                            ?


                            'Hola, soy un frontend dev y actualemnte estudio programación backend (stack MERN). Me considero una persona optimista, dedicada y creativa. Disfruto programar y aprender todos los días sobre desarrollo de software, inteligencia artificial y la web3. Intento siempre ayudar y hacer bien las cosas.'
                            
                            :
                            
                            'Hi, Im a frontend dev and Im currently studying backend programming (MERN stack). I consider myself an optimistic, dedicated and creative person. I enjoy programming and learning every day about software development, artificial intelligence and web3. I always try to help and do things well.'
                            

                            }
                        </Text>
                    </Stack>
                    </Center>
                    <Center w='100%'  h={{base: '300px', md: '500px', lg: '600px'}}>
                        <Circle p={{base: 6, xl: 10}} border={'1px'} borderColor={'red.500'}>
                            <Circle className='foto' p={{base: 4, xl: 8}} border={'1px'} borderColor={'red.500'} borderStyle={'dashed'}>
                                <Image
                                borderRadius='full'
                                boxSize={{base: '200px', md: '300', lg: '400px'}}
                                src={selfie1}
                                alt='Augusto Ojeda'
                                />
                            </Circle>
                        </Circle>
                    </Center>
                </Stack>
            </Box>
            
            :
// Dark
            <Box bgImage={galaxyAll} bgRepeat={'no-repeat'} bgSize={'cover'} h={{base: '700px', sm: '700px', md: '600px', lg: '700px', xl: '800px'}}  w='100%' p={4} pb={10}>
                <Stack direction={{base: 'column', md: 'row'}} spacing='24px' mb={10}>
                    <Center w='100%' h={{base: '300px', md: '500px', lg: '600px'}} px={5}>
                    <Stack spacing={2}>
                        <Heading bgGradient='linear(to-l,  #7928CA, #FF0080)' bgClip='text' fontFamily={'sans-serif'} fontWeight={'extrabold'} fontSize={{base: '3xl', sm: '4xl', lg: '7xl'}} letterSpacing='wider' textAlign={'center'}>Augusto Ojeda</Heading>
                        <Text bgGradient='linear(to-r, #1bbdcb, #FF0080)'  bgClip='text' fontFamily={'sans-serif'} fontSize={{base: 'xl', sm: '2xl', lg: '4xl', xl: '5xl'}} fontWeight={'semibold'} textAlign='center'>Frontend Developer.</Text>
                        <Text textShadow={'base'} color={'white'} fontFamily={'mono'} fontSize={{base: 'sm', sm: 'md', lg: 'lg'}} p={1} textAlign='center'>
                            {
                            
                            language

                            ?


                            'Hola, soy un frontend dev y actualemnte estudio programación backend (stack MERN). Me considero una persona optimista, dedicada y creativa. Disfruto programar y aprender todos los días sobre desarrollo de software, inteligencia artificial y la web3. Intento siempre ayudar y hacer bien las cosas.'
                            
                            :
                            
                            'Hi, Im a frontend dev and Im currently studying backend programming (MERN stack). I consider myself an optimistic, dedicated and creative person. I enjoy programming and learning every day about software development, artificial intelligence and web3. I always try to help and do things well.'
                            

                            }</Text>
                    </Stack>
                    </Center>
                    <Center w='100%'  h={{base: '300px', md: '500px', lg: '600px'}}>
                        <Box borderRadius={'lg'} transform={'rotate(-15deg)'} p={{base: 2, xl: 0}} bgGradient='linear(to-l, #7928CA, #FF0080)'>
                            <Box borderRadius={'xl'} transform={'rotate(10deg)'} p={{base: 6, xl: 8}} bgGradient='linear(to-bl, #5609a3, #7928CA, #FF0080)'>
                                <Box transform={'rotate(5deg)'} bgColor={'white'} borderRadius='md' p={0.5}>
                                    <Image
                                    borderRadius='md'
                                    boxSize={{base: '150px', sm: '200px', md: '200px', lg: '300px', xl: '350px'}}
                                    src={selfie4}
                                    alt='Augusto Ojeda'
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