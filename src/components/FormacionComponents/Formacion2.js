import React from 'react'
import {Box, Stack, Text, Image} from '@chakra-ui/react'
import react from '../assets/react.png'
import { gsap } from 'gsap'

const Formacion2 = () => {

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
                <Image h={{base: '200px', lg: '230px', xl: '280px'}} w={'100%'} src={react} alt='react' borderTopRadius={'md'} />
            </Box>
            <Box w={{base: '100%', md: '320px'}} display={'flex'} justifyContent={'center'} alignItems={'center'} flexFlow={'column'} h='80px' bgColor={'green.50'} borderBottomRadius={'md'}>
                <Text color={'green.500'}>React js</Text>
                <Text bgGradient='linear(to-l, green.300, green.600)' bgClip='text' fontSize={'4xl'} fontWeight={'semibold'}>Completo</Text>
            </Box>
        </Stack>

    </>
  )
}

export default Formacion2