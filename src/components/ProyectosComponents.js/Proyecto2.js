import React from 'react'
import {Box, Image, Text, HStack, Circle, Flex, Spacer, Divider} from '@chakra-ui/react'
import {IoLogoJavascript} from 'react-icons/io'
import {SiReact, SiTailwindcss} from 'react-icons/si'
import {SiNextdotjs} from 'react-icons/si'
import { gsap } from 'gsap'

import GithubButton from '../NavBarComponents/GithubButton'
import ButtonGo from './ButtonGo'
import TechMobile from '../assets/TechMobile.png'

const Proyecto2 = () => {

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { filter: 'none', scale: 1.05 });
      };
      
      const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { filter: 'grayscale(80%)', scale:1 });
      };

  return (
    <>

    <Box boxShadow='base' borderRadius={'md'}>
            <Box w='100%' h={{base: '250px', sm: '320px', md: '300px'}}>
                <Image                        
                        onMouseEnter={onEnter} onMouseLeave={onLeave} 
                        filter='grayscale(80%)'
                        borderTopRadius={'base'}
                        w={'100%'}
                        h={'100%'}
                        // objectFit='cover'
                        src={TechMobile}
                        alt='Tech Mobile'
                    />
                </Box>
                <Box w='100%' h='50px' >
                    <HStack spacing='10px' p={2} display={'flex'} justifyContent='center'>
                        <Circle size={{base: '30px', lg: '35px'}} bg={{base: 'red.50'}} color={{base: 'red.500'}} border='1px' borderColor='red.500'>
                            <IoLogoJavascript/>
                        </Circle>
                        <Circle size={{base: '30px', lg: '35px'}} bg={{base: 'red.50'}} color={{base: 'red.500'}} border='1px' borderColor='red.500'>
                            <SiReact/>
                        </Circle>
                        <Circle size={{base: '30px', lg: '35px'}} bg={{base: 'red.50'}} color={{base: 'red.500'}} border='1px' borderColor='red.500'>
                            <SiTailwindcss/>
                        </Circle>
                    </HStack>
                </Box>
                <Divider/>
                <Box w='100%' h='110px' p={2}>
                    <Text fontFamily={'sans-serif'} fontSize={{base: 'xs', sm: 'xs', lg: 'sm'}} p={1} textAlign='center'>TechMobile es una ecommerce de telefonos, puedes comparar equipos, buscar por marcas, añadir al carrito y simular una compra.</Text>
                </Box>
                <Divider/>
                <Box w='100%' h='auto' borderBottomRadius={'md'}>
                    <Flex p={1} >
                        <Spacer/>
                        <Box mr={2}>
                            <a href='https://github.com/AugustoOjd/TechMobil_Augusto-Ojeda'>
                                <GithubButton/>
                            </a>

                        </Box>
                        
                        <Box mr={2}>
                            <a  href='https://augustoojd.github.io/TechMobil_Augusto-Ojeda/'>
                                <ButtonGo/>
                            </a>

                        </Box>
                        
                    </Flex>
            </Box>
    </Box>
    </>
  )
}

export default Proyecto2