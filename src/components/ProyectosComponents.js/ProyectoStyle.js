import React from 'react'
import {Box, Image, Text, HStack, Circle, Flex, Spacer, Divider} from '@chakra-ui/react'
import {IoLogoJavascript} from 'react-icons/io'
import {SiReact, SiRedux, SiChakraui,SiGreensock, SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiMaterialui} from 'react-icons/si'
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
            <Box  w='100%' h={{base: '230px', sm: '320px', md: '300px'}} >
                <a href={linkDeploy}>
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
                </a>
                </Box>
                <Box w='100%' h='50px' bg={{base: 'white'}}>
                    <HStack spacing='10px' p={2} display={'flex'} justifyContent='center'>
                        
                        {
                        name === 'NO-flix' || name === 'TechMobile'

                        ?
                        <Circle size={{base: '30px', lg: '35px'}} bgColor={''} color={'red.500'} border='1px' borderColor={'red.500'}>
                            <IoLogoJavascript/>
                        </Circle>
                        
                        :

                        null

                        }

                        <Circle size={{base: '30px', lg: '35px'}} bgColor={'red.50'} color={'red.500'} border='1px' borderColor={'red.500'}>
                            <SiReact/>
                        </Circle>
                        { name === 'NO-flix' || name === 'U-Culture'
                        
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
                        
                        null
                        }

                        {
                            name === 'TechMobile'

                            ?
                            <Circle size={{base: '30px', lg: '35px'}} bgColor={'red.50'} color={'red.500'} border='1px' borderColor={'red.500'}>
                                < SiTailwindcss/>
                            </Circle>
                            :
                            null
                        }

                        {
                            name === 'Poke-api' || name === 'Custom-Store'
    
                            ?
                            <>
                            <Circle size={{base: '30px', lg: '35px'}} bgColor={''} color={'red.500'} border='1px' borderColor={'red.500'}>
                                <SiNextdotjs/>
                            </Circle>
                            </>
                            :
                            null
                        }
                        {
                            name === 'Poke-api' || name === 'Custom-Store' || name === 'U-Culture'
                            ?

                            <>
                            <Circle size={{base: '30px', lg: '35px'}} bgColor={''} color={'red.500'} border='1px' borderColor={'red.500'}>
                                <SiTypescript/>
                            </Circle>
                            </>
                            
                            :
                            
                            null
                        }

                        {
                            name === 'Custom-Store'
    
                            ?
                            <>
                            <Circle size={{base: '30px', lg: '35px'}} bgColor={''} color={'red.500'} border='1px' borderColor={'red.500'}>
                                <SiMongodb/>
                            </Circle>
                            </>
                            :
                            null
                        }
                        {

                            name === 'Custom-Store' || name === 'U-Culture'
                            ? 
                            <>
                            <Circle size={{base: '30px', lg: '35px'}} bgColor={''} color={'red.500'} border='1px' borderColor={'red.500'}>
                                <SiMaterialui/>
                            </Circle>
                            </>
                            
                            :
                            
                            null
                        }


                    </HStack>
                </Box>
                <Divider/>
                <Box w='100%' h='110px' bg={{base: 'white'}} p={2}>
                    <Text fontFamily={'sans-serif'} fontSize={{base: 'xs', sm: 'xs', md: 'xs', lg: 'sm'}} textAlign='center'>{`${name}: ${description}`}</Text>
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