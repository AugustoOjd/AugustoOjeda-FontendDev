import React from 'react'
import {Box, Center, HStack, Heading, Circle} from '@chakra-ui/react'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiExpress, SiMongodb, SiMysql} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import galaxyAll3 from './assets/galaxyAll3.jpg'


const Tegnologias = () => {

    const theme = useSelector((state)=> state.theme.value)

  return (
    <>
{        
theme

?



<Box bg='white' w='100%' p={4} mb={2}>

        <Heading bgGradient='linear(to-l, red.500, #FF0080)' bgClip='text' fontFamily={'sans-serif'} fontSize={{base: 'xl', sm: '2xl', lg: '5xl'}} fontWeight={'bold'} textAlign='center' mb={10} mt={10}>Tegnologías.</Heading>

            <Center bg={{base: 'white'}} h={{base: '100px', sm: '120px', lg: '170px'}} color='white' border={'1px'} borderColor={'red.500'} borderRadius={'md'} mb={8} mx={{base: '8px', sm: '30px', md: '100px', lg: '200px', xl: '300px' }}>
                <HStack spacing='20px'>
                    <Circle className='box' size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='orange.500' boxShadow={'base'} >
                        <Box w={{base: '35px', sm: '50px', md: '60px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiHtml5 size={'auto'}/>
                        </Box>
                    </Circle>
                    <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='blue.500' boxShadow={'base'}>
                        <Box w={{base: '35px', sm: '50px', md: '60px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiCss3 size={'auto'} />
                        </Box>
                    </Circle>
                    <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='yellow.300' boxShadow={'base'}>
                        <Box w={{base: '35px', sm: '45px', md: '55px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiJavascript size={'auto'}/>
                        </Box>
                    </Circle>
                    <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='blue.600' boxShadow={'base'}>
                        <Box w={{base: '35px', sm: '45px', md: '55px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiTypescript size={'auto'}/>
                        </Box>
                    </Circle>
                    <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='blue.300' boxShadow={'base'}>
                        <Box w={{base: '35px', sm: '50px', md: '60px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiReact size={'auto'}/>
                        </Box>
                    </Circle>
                </HStack>
            </Center>


            <Center bg={{base: 'white'}} h={{base: '100px', sm: '120px', lg: '170px'}} color='white' border={'1px'} borderColor={'red.500'} borderRadius={'md'} mb={5} mx={{base: '10px', sm: '30px', md: '100px', lg: '200px',  xl: '300px'}}>
                <HStack spacing='20px'>
                <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='green.600' boxShadow={'base'} >
                        <Box w={{base: '35px', sm: '50px', md: '60px', lg: '60px'}} h={'auto'} p={1.5}>
                            <FaNodeJs size={'auto'}/>
                        </Box>
                    </Circle>
                    <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='gray.600' boxShadow={'base'}>
                        <Box w={{base: '35px', sm: '50px', md: '60px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiExpress size={'auto'} />
                        </Box>
                    </Circle>
                    <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='green.300' boxShadow={'base'}>
                        <Box w={{base: '35px', sm: '45px', md: '55px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiMongodb size={'auto'}/>
                        </Box>
                    </Circle>
                    <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='orange.400' boxShadow={'base'}>
                        <Box w={{base: '35px', sm: '45px', md: '55px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiMysql size={'auto'}/>
                        </Box>
                    </Circle>
                    {/* <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='blue.300' boxShadow={'base'}>
                        <Box w={{base: '35px', sm: '50px', md: '60px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiReact size={'auto'}/>
                        </Box>
                    </Circle> */}
                </HStack>
            </Center>
        </Box>
        
        :

        <Box bgImage={galaxyAll3} bgRepeat={'no-repeat'} bgSize={'cover'} h={{base: '380px', sm: '420px', md: '470px', lg: '650px', xl: '700px'}} w='100%' p={4}>

        <Heading bgGradient='linear(to-l, red.500, #FF0080)' bgClip='text' fontFamily={'sans-serif'} fontSize={{base: 'xl', sm: '2xl', lg: '5xl'}} fontWeight={'bold'} textAlign='center' my={4}>Tegnologías.</Heading>

            <Center bg={{base: 'white'}} h={{base: '100px', sm: '120px', lg: '170px'}} color='white' border={'1px'} borderColor={'red.500'} borderRadius={'md'} my={10} mx={{base: '8px', sm: '30px', md: '100px', lg: '200px', xl: '300px' }}>
                <HStack spacing='20px'>
                    <Circle className='box' size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='orange.500' boxShadow={'base'} >
                        <Box w={{base: '35px', sm: '50px', md: '60px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiHtml5 size={'auto'}/>
                        </Box>
                    </Circle>
                    <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='blue.500' boxShadow={'base'}>
                        <Box w={{base: '35px', sm: '50px', md: '60px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiCss3 size={'auto'} />
                        </Box>
                    </Circle>
                    <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='yellow.300' boxShadow={'base'}>
                        <Box w={{base: '35px', sm: '45px', md: '55px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiJavascript size={'auto'}/>
                        </Box>
                    </Circle>
                    <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='blue.600' boxShadow={'base'}>
                        <Box w={{base: '35px', sm: '45px', md: '55px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiTypescript size={'auto'}/>
                        </Box>
                    </Circle>
                    <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='blue.300' boxShadow={'base'}>
                        <Box w={{base: '35px', sm: '50px', md: '60px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiReact size={'auto'}/>
                        </Box>
                    </Circle>
                </HStack>
            </Center>


            <Center bg={{base: 'white'}} h={{base: '100px', sm: '120px', lg: '170px'}} color='white' border={'1px'} borderColor={'red.500'} borderRadius={'md'}  mx={{base: '10px', sm: '30px', md: '100px', lg: '200px',  xl: '300px'}}>
                <HStack spacing='20px'>
                <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='green.600' boxShadow={'base'} >
                        <Box w={{base: '35px', sm: '50px', md: '60px', lg: '60px'}} h={'auto'} p={1.5}>
                            <FaNodeJs size={'auto'}/>
                        </Box>
                    </Circle>
                    <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='gray.600' boxShadow={'base'}>
                        <Box w={{base: '35px', sm: '50px', md: '60px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiExpress size={'auto'} />
                        </Box>
                    </Circle>
                    <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='green.300' boxShadow={'base'}>
                        <Box w={{base: '35px', sm: '45px', md: '55px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiMongodb size={'auto'}/>
                        </Box>
                    </Circle>
                    <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='orange.400' boxShadow={'base'}>
                        <Box w={{base: '35px', sm: '45px', md: '55px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiMysql size={'auto'}/>
                        </Box>
                    </Circle>
                    {/* <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color='blue.300' boxShadow={'base'}>
                        <Box w={{base: '35px', sm: '50px', md: '60px', lg: '60px'}} h={'auto'} p={1.5}>
                            <SiReact size={'auto'}/>
                        </Box>
                    </Circle> */}
                </HStack>
            </Center>
        </Box>
        
        }
    </>
  )
}

export default Tegnologias