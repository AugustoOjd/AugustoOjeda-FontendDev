import React from 'react'
import {Box, Center, HStack, Heading, Circle} from '@chakra-ui/react'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiExpress, SiMongodb, SiMysql, SiNextdotjs} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import galaxyAll3 from './assets/galaxyAll3.jpg'
import TegnologiaStyle from './tegnologiasComponents/TegnologiaStyle'
import TegnoStylesDark from './tegnologiasComponents/TegnoStylesDark'

const tecno = [
    {
        name: 'html',
        logo: <SiHtml5/>,
        color: 'orange.500',
        logoB: <FaNodeJs/>,
        colorB: 'green.700'
    },
    {
        name: 'css',
        logo: <SiCss3/>,
        color: 'blue.500',
        logoB: <SiExpress/>,
        colorB: 'gray.400'
    },
    {
        name: 'javascript',
        logo: <SiJavascript/>,
        color: 'yellow.300',
        logoB: <SiMongodb />,
        colorB: 'green.300'
    },
    {
        name: 'typescript',
        logo: <SiTypescript/>,
        color: 'blue.600',
        logoB: <SiMysql/>,
        colorB: 'orange.400'
    },
    {
        name: 'react',
        logo: <SiReact/>,
        color: 'blue.300',
        logoB: <SiNextdotjs/>,
        colorB: 'gray.500'
    }

]


const Tegnologias = () => {

    const theme = useSelector((state)=> state.theme.value)

  return (
    <>
{        
theme

?



        <Box bg='white' w='100%' p={4} mb={2}>


                <Heading bgGradient='linear(to-l, red.500, #FF0080)' bgClip='text' fontFamily={'sans-serif'} fontSize={{base: 'xl', sm: '2xl', lg: '5xl'}} fontWeight={'bold'} textAlign='center' mb={10} mt={10}>Tegnologías.</Heading>

            <Center bg={{base: 'white'}} h={{base: '100px', sm: '120px', lg: '170px'}} color='white' border={'1px'} borderColor={'red.500'} borderRadius={'md'} mb={8} mx={{base: '8px', sm: '30px', md: '100px', lg: '200px', xl: '300px' }}>
                <HStack spacing='20px'>
                    {tecno.map(e=> (<TegnologiaStyle logo={e.logo} color={e.color}/>))}
                </HStack>
            </Center>


            <Center bg={{base: 'white'}} h={{base: '100px', sm: '120px', lg: '170px'}} color='white' border={'1px'} borderColor={'red.500'} borderRadius={'md'} mb={5} mx={{base: '10px', sm: '30px', md: '100px', lg: '200px',  xl: '300px'}}>
                <HStack spacing='20px'>
                    {tecno.map(e=> (<TegnologiaStyle logoB={e.logoB} colorB={e.colorB}/>))}
                </HStack>
            </Center>
        </Box>
        
        :

        <Box bgImage={galaxyAll3} bgRepeat={'no-repeat'} bgSize={'cover'} h={{base: '380px', sm: '420px', md: '470px', lg: '650px', xl: '700px'}} w='100%'>
        <Box bgGradient={'linear(to-b, blackAlpha.900, blackAlpha.600)'}>
        <Heading  bgGradient='linear(to-l,  #7928CA, #FF0080)'  bgClip='text'  fontFamily={'sans-serif'} fontSize={{base: '2xl', sm: '3xl', md: '5xl', lg: '6xl'}} fontWeight={'bold'} textAlign='center' p={2} mb={10}>Tegnologías</Heading>
        </Box>
            <Center h={{base: '100px', sm: '120px', lg: '170px'}} color='white' borderRadius={'md'} mb={8} mx={{base: '8px', sm: '30px', md: '100px', lg: '200px', xl: '300px' }}>
                <HStack spacing={{base: '8px', sm: '10px', md: '20px', xl: '35px'}}>
                    {tecno.map(e=> (<TegnoStylesDark logo={e.logo} color={e.color}/>))}
                </HStack>
            </Center>


            <Center  h={{base: '100px', sm: '120px', lg: '170px'}} color='white' borderRadius={'md'} mb={5} mx={{base: '10px', sm: '30px', md: '100px', lg: '200px',  xl: '300px'}}>
                <HStack spacing={{base: '8px', sm: '10px', md: '20px', xl: '35px'}}>
                    {tecno.map(e=> (<TegnoStylesDark logoB={e.logoB} colorB={e.colorB}/>))}
                </HStack>
            </Center>
        </Box>
        
        }
    </>
  )
}

export default Tegnologias