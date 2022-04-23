import React from 'react'
import {Box, Image, Text, HStack, Circle, Flex, Spacer} from '@chakra-ui/react'
import {IoLogoJavascript} from 'react-icons/io'
import {SiReact} from 'react-icons/si'
import {SiNextdotjs} from 'react-icons/si'
import GithubButton from '../NavBarComponents/GithubButton'
import ButtonGo from './ButtonGo'

const Proyecto3 = () => {
  return (
    <>
                <Box w='100%' h={{base: '250px', sm: '330px', lg: '400px'}} bg='yellow.200'>
                <Image
                        w={'100%'}
                        h={'100%'}
                        // objectFit='cover'
                        src='https://bit.ly/dan-abramov'
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
                            <GithubButton/>
                        </Box>
                        
                        <Box mr={2}>
                            <ButtonGo/>
                        </Box>
                        
                    </Flex>
            </Box>
    </>
  )
}

export default Proyecto3