import React from 'react'
import {Box, Stack, Heading, Divider} from '@chakra-ui/react'
import Proyecto1 from './ProyectosComponents.js/Proyecto1'
import Proyecto2 from './ProyectosComponents.js/Proyecto2'
import Proyecto3 from './ProyectosComponents.js/Proyecto3'
import { useSelector } from 'react-redux'


const Proyectos = () => {

    const theme = useSelector((state)=> state.theme.value)
return (
    <>
        {
            
            theme
            
            ?
            
            <Box bg='white' w='100%' p={2} pb={'60px'} mb={10} mt={10} borderBottomWidth={1}>
                        
            <Heading bgGradient='linear(to-l, red.500, #FF0080)' bgClip='text' fontFamily={'sans-serif'} fontSize={{base: 'xl', sm: '2xl', lg: '5xl'}} fontWeight={'bold'} textAlign='center' mb={10}>Proyectos.</Heading>

            <Stack direction={{base: 'column', md: 'row'}} spacing={{base: '12px', lg: '30px'}} borderWidth='1px' borderColor={'red.500'} borderRadius={'base'} p={4} mx={{ sm: '25px', md: '0px', lg: '60px', xl: '120px'}} px={{base: 4, sm: '65px', md: 2, lg: '30px'}} py={{lg: '30px'}}>
            

            <Stack direction={'column'} spacing='1px' w={{base: '100%', md: '32%'}}>
                {/* PROYECTO NRO 1 */}
                <Proyecto1/>
            </Stack>

            <Stack direction={'column'} spacing='1px' w={{base: '100%', md: '33%'}} >
                {/* PROYECTO NRO 2 */}
                <Proyecto2/>
            </Stack>

            <Stack direction={'column'} spacing='1px' w={{base: '100%', md: '32%'}}>
                {/* PROYECTO NRO 2 */}
                <Proyecto3/>
            </Stack>

            </Stack>
        
        </Box>

        :
            // fondo dark1: https://i.pinimg.com/originals/51/6f/b5/516fb53642fbca78f3ee5c7f2a213e1c.jpg
            // fondo dark2: https://www.xtrafondos.com/en/descargar.php?id=4465&resolucion=1920x1080
            // bgImage={'https://i.pinimg.com/originals/51/6f/b5/516fb53642fbca78f3ee5c7f2a213e1c.jpg'} bgRepeat={'no-repeat'} bgSize={'cover'}

            
        <Box bgImage={'https://www.xtrafondos.com/en/descargar.php?id=4465&resolucion=1920x1080'} bgRepeat={'no-repeat'} bgPosition={'revert'} bgSize={'cover'}  w='100%' pb={'60px'} mb={10} borderBottomWidth={1} borderColor={'purple.700'}>
            <Box bgColor={'blackAlpha.900'}>    
            <Heading  bgGradient='linear(to-l,  #7928CA, #FF0080)'  bgClip='text'  fontFamily={'sans-serif'} fontSize={{base: '2xl', sm: '3xl', md: '5xl', lg: '6xl'}} fontWeight={'bold'} textAlign='center' p={2} mb={10}>Proyectos.</Heading>
            </Box>
            <Stack direction={{base: 'column', md: 'row'}} spacing={{base: '12px', lg: '30px'}} p={4} mx={{ sm: '25px', md: '0px', lg: '60px', xl: '120px'}} px={{base: 4, sm: '65px', md: 2, lg: '30px'}} py={{lg: '30px'}}>
            

            <Stack direction={'column'} spacing='1px' w={{base: '100%', md: '32%'}}>
                {/* PROYECTO NRO 1 */}
                <Proyecto1/>
            </Stack>

            <Stack direction={'column'} spacing='1px' w={{base: '100%', md: '33%'}} >
                {/* PROYECTO NRO 2 */}
                <Proyecto2/>
            </Stack>

            <Stack direction={'column'} spacing='1px' w={{base: '100%', md: '32%'}}>
                {/* PROYECTO NRO 2 */}
                <Proyecto3/>
            </Stack>

            </Stack>
        
        </Box>
        }
    </>
)
}

export default Proyectos