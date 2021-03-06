import React from 'react'
import {Box, Stack, Text, Heading} from '@chakra-ui/react'
import FormacionStyle from './FormacionComponents/FormacionStyle'
import { useSelector } from 'react-redux'
import galaxyAll4 from './assets/galaxyAll4.jpg'
import javascript from './assets/javascript.png'
import react from './assets/react.png'
import Coder from './assets/Coder.jpg'
import udemy from './assets/udemy.png'
import FormacionStyleDark from './FormacionComponents/FormacionStyleDark'

const formation = [
  {
    name: 'Javascript',
    img: javascript,
    state: 'Completo',
    stateEn: 'Finished', 
    href: 'https://www.coderhouse.com/certificados/61be7e464affad0048479c29'
  },
  {
    name: 'React',
    img: react,
    state: 'Completo',
    stateEn: 'Finished', 
    href: 'https://www.coderhouse.com/certificados/622123c67254050053f73836'
  },
  {
    name: 'Programación Backend',
    img: Coder,
    state: 'Actualidad',
    stateEn: 'Current',
    href: ''
  },
  {
    name: 'Next js',
    img: udemy,
    state: 'Actualidad',
    stateEn: 'Current',
    href: ''
  }
]

const Formacion = () => {

  const theme = useSelector((state)=> state.theme.value)
  const traslate = useSelector((state)=> state.language.value)
  
  return (
    <>
{      

theme

?

<Box bg='white' w='100%' h={{base: '450px', md: '600px'}} borderWidth='1px'>

      <Heading bgGradient='linear(to-l, red.500, #FF0080)' bgClip='text' fontSize={{base: '2xl', sm: '3xl', md: '5xl', lg: '6xl'}} fontWeight={'bold'} textAlign='center' p={2} mb={10}>
        {
        traslate
        
        ?
        
        'Formación'
      
        :
        
        'Education'
        }
        </Heading>

        <Stack direction={{base: 'row'}} justifyContent={'center'} alignItems={'center'} spacing='20px' h={{ base: '320px', md: 'auto'}} borderWidth='1px' borderColor={'red.500'} borderRadius={'base'} p={10} mb={5}  mx={{base: '20px', sm: '20px', md: '20px', lg: '80px', xl: '120px'}} overflowX={'auto'}>
              
                <Box ml={{base: '600px', sm: '480px', md: '370px', lg: '280px', xl: '0px'}} display={'flex'} justifyContent={'center'}  h='auto' boxShadow='base' borderRadius={'md'}>

                    {formation.map(e=> ( <FormacionStyle key={e.name} name={e.name} img={e.img} href={e.href} state={traslate ? e.state : e.stateEn} />))}

                </Box>
        </Stack>
      </Box>
      
    :
    
    <Box bgImage={galaxyAll4} bgRepeat={'no-repeat'} bgSize={'cover'} w='100%' h={{base: '460px', md: '600px'}}>

  <Box bgGradient={'linear(to-b, blackAlpha.900, blackAlpha.600)'}>
        <Heading  bgGradient='linear(to-l,  #7928CA, #FF0080)'  bgClip='text'  fontFamily={'sans-serif'} fontSize={{base: '2xl', sm: '3xl', md: '5xl', lg: '6xl'}} fontWeight={'bold'} textAlign='center' p={2} mb={10}>
          {
          traslate
          
          ?
          
          'Formación'
        
          :
          
          'Education'
          }
          </Heading>
  </Box>
      <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'center'} spacing='20px' h={{ base: '325px', md: '400px'}} p={10} mb={5}  mx={{base: '20px', sm: '20px', md: '20px', lg: '80px', xl: '100px'}} overflowX={'auto'}>
            
              <Box ml={{xl: '80px'}} display={'flex'} justifyContent={'center'}  h='auto' boxShadow='base' borderRadius={'md'}>
                {formation.map(e=> ( <FormacionStyleDark key={e.name} name={e.name} img={e.img} href={e.href} state={traslate ? e.state : e.stateEn} />))}
              </Box>
      </Stack>
    </Box>
    
    }
    </>
  )
}

export default Formacion