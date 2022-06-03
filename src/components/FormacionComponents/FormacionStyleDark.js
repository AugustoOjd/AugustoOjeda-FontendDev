import React from 'react'
import {Box, Stack, Image, Text} from '@chakra-ui/react'
import { gsap } from 'gsap'

const FormacionStyleDark = ({href, name, img, state}) => {

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1.02 });
      };
      
      const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, {  scale:1 });
      };

  return (
    <>

        <Box display={'flex'} mx={8}>

        <Box bgColor={'purple.500'} transform={'rotate(-10deg)'} p={1} borderRadius={'md'}>
          <Box bgColor={'pink.500'} transform={'rotate(5deg)'} p={1} borderRadius={'md'}>
            <Box transform={'rotate(5deg)'}>
            <a href={href}>
                <Stack spacing={0} direction={'column'} w={{base: '200px', md: '250px'}} h={{base: '220px', md: '270px'}} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <Box w={{base: '200px', md: '250px'}} h={{base: '150px', md: '200px'}}>
                        <Image w={'100%'} h={'100%'} src={img} alt={img} borderTopRadius={'md'} />
                    </Box>
                    <Box w={{base: '200px', md: '250px'}} h={{base: '70px'}} display={'flex'} justifyContent={'center'} alignItems={'center'} flexFlow={'column'} bgColor={'green.50'} borderBottomRadius={'md'}>
                        <Text color={state == 'Actualidad' ? 'orange.500' : 'green.500'}>{name}</Text>
                        <Text bgGradient={ state == 'Actualidad' ? 'linear(to-l, orange.300, yellow.500)' : 'linear(to-l, green.300, green.600)'} bgClip='text' fontSize={'3xl'} fontWeight={'semibold'}>{state}</Text>
                    </Box>
                </Stack>
            </a>
            </Box>
          </Box>
        </Box>




        </Box>

    </>
  )
}

export default FormacionStyleDark