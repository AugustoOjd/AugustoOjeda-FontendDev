import React from 'react'
import {Box, Image, Text, HStack, Circle, Flex, Spacer} from '@chakra-ui/react'
import {IoLogoJavascript} from 'react-icons/io'
import {SiReact} from 'react-icons/si'
import {SiNextdotjs} from 'react-icons/si'
import GithubButton from '../NavBarComponents/GithubButton'
import ButtonGo from './ButtonGo'
import Postlinke from '../assets/Postlinke.png'

const Proyecto1 = () => {
  return (
    <>
            <Box w='100%' h={{base: '250px', sm: '320px', md: '300px'}} bg='yellow.200' boxShadow='base' borderRadius={'md'}>
                <Image
                        w={'100%'}
                        h={'100%'}
                        // objectFit='cover'
                        src={Postlinke}
                        alt='Dan Abramov'
                    />
                </Box>
                <Box w='100%' h='60px' bg='tomato'>
                    <HStack spacing='10px' p={2} display={'flex'} justifyContent='center'>
                        <Circle size='40px' bg='blue.300' color='white'>
                            <IoLogoJavascript/>
                        </Circle>
                        <Circle size='40px' bg='blue.300' color='white'>
                            <SiReact/>
                        </Circle>
                        <Circle size='40px' bg='blue.300' color='white'>
                            <SiNextdotjs/>
                        </Circle>
                    </HStack>
                </Box>
                <Box w='100%' h='100px' bg='pink.100'>
                    <Text fontSize={{base: 'xs', sm: 'xs', lg: 'md'}} p={1} textAlign='center'>Hola, soy un frontend dev, me considero una persona optimista, trabajadora y creativa. Me gusta el mundo de la inteligencia artificial (AI)</Text>
                </Box>

                <Box w='100%' h='auto' bg='yellow.200'>
                    <Flex p={1} >
                        <Spacer/>
                        <Box mr={2}>
                        <a href='https://github.com/AugustoOjd/NO-Flix'>
                            <GithubButton>
                              
                            </GithubButton>
                        </a>
                        </Box>
                        
                        <Box mr={2}>
                        <a href='https://augustoojd.github.io/NO-Flix/'>
                            <ButtonGo/>
                        </a>
                        </Box>
                        
                    </Flex>
            </Box>
    </>
  )
}

export default Proyecto1