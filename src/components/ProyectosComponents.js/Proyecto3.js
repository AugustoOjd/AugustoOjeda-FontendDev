import React from 'react'
import {Box, Image, Text, HStack, Circle, Flex, Spacer, Divider} from '@chakra-ui/react'
import {IoLogoJavascript} from 'react-icons/io'
import {SiReact} from 'react-icons/si'
import {SiNextdotjs} from 'react-icons/si'
import GithubButton from '../NavBarComponents/GithubButton'
import ButtonGo from './ButtonGo'
import Construccion from '../assets/Construccion.webp'
import { gsap } from 'gsap'

const Proyecto3 = () => {

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { filter: 'none', scale: 1.05 });
      };
      
      const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { filter: 'grayscale(80%)', scale:1 });
      };

  return (
    <>
        <Box bgColor={'white'} boxShadow='base' borderRadius={'md'}>
                <Box w='100%' h={{base: '250px', sm: '320px', md: '300px'}} bg='yellow.200'>
                <Image                        
                        onMouseEnter={onEnter} onMouseLeave={onLeave} 
                        filter='grayscale(80%)'
                        borderTopRadius={'base'}
                        w={'100%'}
                        h={'100%'}
                        // objectFit='cover'
                        src={Construccion}
                        alt='Dan Abramov'
                    />
                </Box>
                <Box w='100%' h='50px' bg={{base: 'white'}}>
                    <HStack spacing='10px' p={2} display={'flex'} justifyContent='center'>
                        <Circle size={{base: '30px', lg: '35px'}} bg={{base: 'red.50'}} color={{base: 'red.500'}} border='1px' borderColor='red.500'>
                            <IoLogoJavascript/>
                        </Circle>
                        <Circle size={{base: '30px', lg: '35px'}} bg={{base: 'red.50'}} color={{base: 'red.500'}} border='1px' borderColor='red.500'>
                            <SiReact/>
                        </Circle>
                        <Circle size={{base: '30px', lg: '35px'}} bg={{base: 'red.50'}} color={{base: 'red.500'}} border='1px' borderColor='red.500'>
                            <SiNextdotjs/>
                        </Circle>
                    </HStack>
                </Box>
                <Divider/>
                <Box w='100%' h='110px' bg={{base: 'white'}} p={2}>
                    <Text fontFamily={'sans-serif'} fontSize={{base: 'xs', sm: 'xs', lg: 'sm'}} p={1} textAlign='center'>Este proyecto está actualmente en construcción</Text>
                </Box>
                <Divider/>
                <Box w='100%' h='auto' bg={{base: 'white'}} borderBottomRadius={'md'}>
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

        </Box>
    </>
  )
}

export default Proyecto3