import React from 'react'
import {Box, Stack, Image, Text} from '@chakra-ui/react'
import { gsap } from 'gsap'

const FormacionStyle = ({href, name, img, state, stateEn}) => {

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1.02 });
      };
      
      const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, {  scale:1 });
      };

  return (
    <>

        <Box display={'flex'} mr={5}>
          <a href={href}>
          <Stack spacing={0} direction={'column'} w={{base: '200px', md: '250px'}} h={{base: '220px', md: '300px'}} onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <Box w={{base: '200px', md: '250px'}} h={{base: '150px', md: '200px'}}>
                  <Image w={'100%'} h={'100%'} src={img} alt={img} borderTopRadius={'md'} />
              </Box>
              <Box w={{base: '200px', md: '250px'}} h={{base: '70px'}} display={'flex'} justifyContent={'center'} alignItems={'center'} flexFlow={'column'} bgColor={'green.50'} borderBottomRadius={'md'}>
                  <Text color={(state === 'Actualidad' || state === 'Current') ? 'orange.500' : 'green.500'}>{name}</Text>
                  <Text bgGradient={ (state === 'Actualidad' || state === 'Current') ? 'linear(to-l, orange.300, yellow.500)' : 'linear(to-l, green.300, green.600)'} bgClip='text' fontSize={'3xl'} fontWeight={'semibold'}>{state}</Text>
              </Box>
          </Stack>
          </a>
        </Box>

    </>
  )
}

export default FormacionStyle