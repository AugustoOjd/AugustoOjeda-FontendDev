import React from 'react'
import {Box, Image, Text, HStack, Circle, Flex, Spacer, Divider} from '@chakra-ui/react'
import {IoLogoJavascript} from 'react-icons/io'
import {SiReact, SiRedux, SiChakraui,SiGreensock, SiTailwindcss} from 'react-icons/si'
import GithubButton from '../NavBarComponents/GithubButton'
import ButtonGo from './ButtonGo'
import { gsap } from 'gsap';

const ProyectoStyle = ({name, img, description, linkRepo, linkDeploy}) => {

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { filter: 'none', scale: 1.05 });
  };
  
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { filter: 'grayscale(80%)', scale:1 });
  };

  return (
    <>
        <Box w={{base: '100%', md: '33%'}}>
        <Box bgColor={'white'} boxShadow='base' borderRadius={'md'}>
            <Box  w='100%' h={{base: '250px', sm: '320px', md: '300px'}} >
                <Image
                        onMouseEnter={onEnter} onMouseLeave={onLeave} 
                        filter='grayscale(80%)'
                        borderTopRadius={'base'}
                        w={'100%'}
                        h={'100%'}
                        // objectFit='cover'
                        src={img}
                        alt={img}
                    />
                </Box>
                <Box w='100%' h='50px' bg={{base: 'white'}}>
                    <HStack spacing='10px' p={2} display={'flex'} justifyContent='center'>
                    <Circle size={{base: '30px', lg: '35px'}} bgColor={'red.50'} color={'red.500'} border='1px' borderColor={'red.500'}>
                            <IoLogoJavascript/>
                        </Circle>
                        <Circle size={{base: '30px', lg: '35px'}} bgColor={'red.50'} color={'red.500'} border='1px' borderColor={'red.500'}>
                            <SiReact/>
                        </Circle>
                       { name === 'NO-flix' 
                       
                       ? 
                       
                       <Circle size={{base: '30px', lg: '35px'}} bgColor={'red.50'} color={'red.500'} border='1px' borderColor={'red.500'}>
                            <SiRedux/>
                        </Circle>
                        
                        :
                        null
                        }
                        {
                        
                        name === 'NO-flix' 
                        
                        ?
                        
                        <Circle size={{base: '30px', lg: '35px'}} bgColor={'red.50'} color={'red.500'} border='1px' borderColor={'red.500'}>
                            <SiChakraui/>
                        </Circle>
                        :
                        
                        <Circle size={{base: '30px', lg: '35px'}} bgColor={'red.50'} color={'red.500'} border='1px' borderColor={'red.500'}>
                            < SiTailwindcss/>
                        </Circle>
                        }
                        {
                            
                        name === 'NO-flix'
                            
                        ?
                            
                        <Circle size={{base: '30px', lg: '35px'}} bgColor={'red.50'} color={'red.500'} border='1px' borderColor={'red.500'}>
                            <SiGreensock/>
                        </Circle>
                        
                        :
                        
                        null
                        
                        }
                    </HStack>
                </Box>
                <Divider/>
                <Box w='100%' h='110px' bg={{base: 'white'}} p={2}>
                    <Text fontFamily={'sans-serif'} fontSize={{base: 'xs', sm: 'xs', md: 'xs', lg: 'sm'}} textAlign='center' fontWeight={'semibold'}>{`${name}: ${description}`}</Text>
                </Box>
                <Divider/>
                <Box w='100%' h='auto' bg={{base: 'white'}} borderBottomRadius={'md'}>
                    <Flex p={1} >
                        <Spacer/>
                        <Box mr={2}>
                        <a href={linkRepo}>
                            <GithubButton />
                        </a>
                        </Box>
                        
                        <Box mr={2}>
                        <a href={linkDeploy}>
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

export default ProyectoStyle
