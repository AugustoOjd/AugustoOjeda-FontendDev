import React from 'react'
import {Box, Center, HStack, Text, IconButton, Link} from '@chakra-ui/react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {BsNewspaper} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import galaxyAll4 from './assets/galaxyAll4.jpg'
import { gsap } from 'gsap'
import cv from './assets/cv.pdf'

const Footer = () => {

  const theme = useSelector((state)=> state.theme.value)

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.05, duration: 0.2 });
  };
  
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1, duration: 0.2 });
  };

  return (
    <>
{
theme

?

<Box bgColor='white' w='100%' p={4} pt={6}>
        <Center>
        <HStack spacing={{ base: '24px', md: '30px', xl: '35px'}}>
          <Box onMouseEnter={onEnter} onMouseLeave={onLeave} w='40px' h='40px' bg='white'>
          <a href='https://www.linkedin.com/in/augustoojedafrontend/'>
          <IconButton 
            variant='outline'
            colorScheme='red'
            aria-label='Call Sage'
            fontSize='20px'
            icon={<BsLinkedin />}
          />
          </a>
          </Box>
          <Box onMouseEnter={onEnter} onMouseLeave={onLeave} w='40px' h='40px' bg='white'>
          <a href='https://github.com/AugustoOjd'>
          <IconButton     
            variant='outline'
            colorScheme='red'
            aria-label='Call Sage'
            fontSize='20px'
            icon={<ImGithub />}
          />
          </a>
          </Box>
          <Box onMouseEnter={onEnter} onMouseLeave={onLeave} w='40px' h='40px' bg='white'>
            <a href='https://www.canva.com/design/DAEqZSVL3Xc/view?utm_content=DAEqZSVL3Xc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'>
          <IconButton
            variant='outline'
            colorScheme='red'
            aria-label='Call Sage'
            fontSize='20px'
            icon={<BsNewspaper />}
          />
          </a>
          </Box>
      </HStack>
      
        </Center>
        <Text fontSize='xs' textAlign={'center'} p={1}>© 2022 Augusto Ojeda</Text>
      </Box>
      
    
    :
    
    <Box bgImage={galaxyAll4} bgRepeat={'no-repeat'} bgSize={'cover'}>
    <Box bgColor={'blackAlpha.900'} w='100%' p={4} pt={6}>
        <Center>
        <HStack spacing={{ base: '24px', md: '30px', xl: '35px'}}>
          <Box onMouseEnter={onEnter} onMouseLeave={onLeave} w={{base: '40px', md: '50px'}} h={{base: '40px', md: '50px'}} >
          <a href='https://www.linkedin.com/in/augustoojedafrontend/'>
          <IconButton
            colorScheme='red' variant='solid' bgGradient='linear(to-l, #7928CA, #FF0080)'
            aria-label='Call Sage'
            fontSize={{base: '20px', md: '30px'}}
            icon={<BsLinkedin />}
          />
          </a>
          </Box>
          <Box onMouseEnter={onEnter} onMouseLeave={onLeave} w={{base: '40px', md: '50px'}} h={{base: '40px', md: '50px'}}>
          <a href='https://github.com/AugustoOjd'>
          <IconButton
            colorScheme='red' variant='solid' bgGradient='linear(to-l, #7928CA, #FF0080)'     
            aria-label='Call Sage'
            fontSize={{base: '20px', md: '30px'}}
            icon={<ImGithub />}
          />
          </a>
          </Box>
          <Box onMouseEnter={onEnter} onMouseLeave={onLeave} w={{base: '40px', md: '50px'}} h={{base: '40px', md: '50px'}}>
          <a href={'https://www.canva.com/design/DAEqZSVL3Xc/view'}>
          <IconButton
            colorScheme='red' variant='solid' bgGradient='linear(to-l, #7928CA, #FF0080)'
            aria-label='Call Sage'
            fontSize={{base: '20px', md: '30px'}}
            icon={<BsNewspaper />}
          />
          </a>
          </Box>
      </HStack>
      
        </Center>
        <Text fontSize={{base: 'xs', md:'sm'}} textAlign={'center'} color={'white'} pt={5}>© 2022 Augusto Ojeda</Text>
      </Box>
    </Box>
    }
    </>
  )
}

export default Footer