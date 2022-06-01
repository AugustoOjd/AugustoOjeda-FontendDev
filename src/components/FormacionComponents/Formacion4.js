import React from 'react'
import {Box, Stack, Image, Text} from '@chakra-ui/react'
import { gsap } from 'gsap'
import udemy from '../assets/udemy.png'

const Formacion3 = () => {

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1.02 });
      };
      
      const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, {  scale:1 });
      };
  return (
    <>
        <Stack direction={'column'} onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <Box w={{base: '100%', md: '320px'}} h={{base: '200px', lg: '230px', xl: '280px'}}>
                <Image h={{base: '200px', lg: '230px', xl: '280px'}} w={'100%'} src={udemy} alt='udemy' borderTopRadius={'md'} />
            </Box>
            <Box w={{base: '100%', md: '320px'}} display={'flex'} justifyContent={'center'} alignItems={'center'} flexFlow={'column'} h='80px' bgColor={'orange.50'} borderBottomRadius={'md'}>
                <Text color={'orange.500'}>Next Js</Text>
                <Text bgGradient='linear(to-l, orange.300, yellow.500)' bgClip='text' fontSize={'4xl'} fontWeight={'semibold'}>Actualidad</Text>
            </Box>
        </Stack>
    </>
  )
}

export default Formacion3