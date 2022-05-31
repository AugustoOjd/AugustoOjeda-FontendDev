import React, {useEffect, useRef} from 'react'
import {Box, Image, Text, HStack, Circle, Flex, Spacer, Divider} from '@chakra-ui/react'
import {IoLogoJavascript} from 'react-icons/io'
import {SiReact, SiRedux, SiChakraui,SiGreensock} from 'react-icons/si'
import GithubButton from '../NavBarComponents/GithubButton'
import ButtonGo from './ButtonGo'
import Postlinke from '../assets/Postlinke.png'
import { gsap } from 'gsap'


const Proyecto1 = () => {

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { filter: 'none', scale: 1.05 });
      };
      
      const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { filter: 'grayscale(80%)', scale:1 });
      };

  return (
    <>
    <Box>
        <Box  boxShadow='base' borderRadius={'md'}>
            <Box  w='100%' h={{base: '250px', sm: '320px', md: '300px'}} >
                <Image
                        onMouseEnter={onEnter} onMouseLeave={onLeave} 
                        filter='grayscale(80%)'
                        borderTopRadius={'base'}
                        w={'100%'}
                        h={'100%'}
                        // objectFit='cover'
                        src={Postlinke}
                        alt='Movie app'
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
                            <SiRedux/>
                        </Circle>
                        <Circle size={{base: '30px', lg: '35px'}} bg={{base: 'red.50'}} color={{base: 'red.500'}} border='1px' borderColor='red.500'>
                            <SiChakraui/>
                        </Circle>
                        <Circle size={{base: '30px', lg: '35px'}} bg={{base: 'red.50'}} color={{base: 'red.500'}} border='1px' borderColor='red.500'>
                            <SiGreensock/>
                        </Circle>
                    </HStack>
                </Box>
                <Divider/>
                <Box w='100%' h='110px' bg={{base: 'white'}} p={2}>
                    <Text fontFamily={'sans-serif'} fontSize={{base: 'xs', sm: 'xs', md: 'xs', lg: 'sm'}} textAlign='center'>No-flix es una app de series y peliculas, donde puedes agregar favoritos, dejar comentarios, filtrar por categorias y votar por un ranking semanal.</Text>
                </Box>
                <Divider/>
                <Box w='100%' h='auto' bg={{base: 'white'}} borderBottomRadius={'md'}>
                    <Flex p={1} >
                        <Spacer/>
                        <Box mr={2}>
                        <a href='https://github.com/AugustoOjd/NO-Flix'>
                            <GithubButton />
                        </a>
                        </Box>
                        
                        <Box mr={2}>
                        <a href='https://augustoojd.github.io/NO-Flix/'>
                            <ButtonGo/>
                        </a>
                        </Box>
                        
                    </Flex>
            </Box>

        </Box>

    </Box>
    </>
  )
}

export default Proyecto1