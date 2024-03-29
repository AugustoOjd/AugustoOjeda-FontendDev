import React, {useEffect} from 'react'
import { Box, Center, Stack, Text, Image, Heading, Circle } from '@chakra-ui/react'
import { gsap } from 'gsap'
import { useSelector } from 'react-redux'
import galaxyAll from './assets/galaxyAll.jpg'
import selfie1 from './assets/selfie1.jpeg'
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
                        <Heading pt={'100px'} bgGradient='linear(to-l, red.500, #FF0080)' bgClip='text' fontFamily={'sans-serif'} fontWeight={'extrabold'} fontSize={{base: '2xl', sm: '4xl', lg: '7xl'}} letterSpacing='wider' textAlign={'center'}>Augusto Ojeda</Heading>
                        <Text bgGradient='linear(to-l, orange.400, red.500)'  bgClip='text' fontFamily={'sans-serif'} fontSize={{base: 'xl', sm: '2xl', lg: '4xl'}} fontWeight={'semibold'} textAlign='center'>Fullstack Developer.</Text>
                        <Text textShadow={'base'} className='text' fontFamily={'mono'} fontSize={{base: 'sm', sm: 'md', lg: 'lg'}} p={1} textAlign='center'>
                        {
                            
                            language

                            ?


                            'Hola, me considero perseverante, receptivo y perfeccionista con mi trabajo, me gusta que todo salga lo mejor posible, en el trabajo de equipo me gusta apoyar a mis compañeros dando opciones alternativas y mantener buena comunicación para sacar el mejor resultado posible, me gusta motivar a las personas que me rodean y tambien rodearme de aquellos con mas conocimiento para aprender de ellos..'
                            
                            :
                            
                            'Hi, I consider myself persevering, receptive and perfectionist with my work, I like everything to go as well as possible, in teamwork I like to support my colleagues by giving alternative options and maintain good communication to get the best possible result, I like to motivate to the people that surround me and also surround me with those with more knowledge to learn from them..'
                            

                            }
                        </Text>
                    </Stack>
                    </Center>
                    <Center w='100%' pt={'100px'} h={{base: '400px', md: '500px', lg: '600px'}}>
                        <Circle p={{base: 2, xl: 10}} border={'1px'} borderColor={'red.500'}>
                            <Circle className='foto' p={{base: 3, xl: 8}} border={'1px'} borderColor={'red.500'} borderStyle={'dashed'}>
                                <Image
                                objectFit={'cover'}
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
            <Box bgImage={galaxyAll} bgRepeat={'no-repeat'} bgSize={'cover'} h={{base: '800px', sm: '900px', md: '700px', lg: '800px', xl: '800px'}}  w='100%' p={4} pb={10}>
                <Stack direction={{base: 'column', md: 'row'}} spacing='24px' mb={10}>
                    <Center w='100%' h={{base: '300px', md: '500px', lg: '600px'}} px={5}>
                    <Stack spacing={2}>
                        <Heading pt={'100px'} bgGradient='linear(to-l,  #7928CA, #FF0080)' bgClip='text' fontFamily={'sans-serif'} fontWeight={'extrabold'} fontSize={{base: '2xl', sm: '4xl', lg: '7xl'}} letterSpacing='wider' textAlign={'center'}>Augusto Ojeda</Heading>
                        <Text bgGradient='linear(to-r, #1bbdcb, #FF0080)'  bgClip='text' fontFamily={'sans-serif'} fontSize={{base: 'xl', sm: '2xl', lg: '4xl', xl: '5xl'}} fontWeight={'semibold'} textAlign='center'>Fullstack Developer.</Text>
                        <Text textShadow={'base'} color={'white'} fontFamily={'mono'} fontSize={{base: 'sm', sm: 'md', lg: 'lg'}} p={1} textAlign='center'>
                            {
                            
                            language

                            ?


                            'Hola, me considero perseverante, receptivo y perfeccionista con mi trabajo, me gusta que todo salga lo mejor posible, en el trabajo de equipo me gusta apoyar a mis compañeros dando opciones alternativas y mantener buena comunicación para sacar el mejor resultado posible, me gusta motivar a las personas que me rodean y tambien rodearme de aquellos con mas conocimiento para aprender de ellos..'
                            
                            :
                            
                            'Hi, I consider myself persevering, receptive and perfectionist with my work, I like everything to go as well as possible, in teamwork I like to support my colleagues by giving alternative options and maintain good communication to get the best possible result, I like to motivate to the people that surround me and also surround me with those with more knowledge to learn from them..'
                            

                            }</Text>
                    </Stack>
                    </Center>
                    <Center w='100%' pt={'100px'}  h={{base: '400px', md: '500px', lg: '600px'}}>
                        <Box borderRadius={'lg'} transform={'rotate(-15deg)'} p={{base: 2, xl: 0}} bgGradient='linear(to-l, #7928CA, #FF0080)'>
                            <Box borderRadius={'xl'} transform={'rotate(10deg)'} p={{base: 6, xl: 8}} bgGradient='linear(to-bl, #5609a3, #7928CA, #FF0080)'>
                                <Box transform={'rotate(5deg)'} bgColor={'white'} borderRadius='md' p={0.5}>
                                    <Image
                                    objectFit={'cover'}
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