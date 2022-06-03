import React from 'react'
import {Box, Stack, Heading, Divider} from '@chakra-ui/react'
import Proyecto1 from './ProyectosComponents.js/Proyecto1'
import Proyecto2 from './ProyectosComponents.js/Proyecto2'
import Proyecto3 from './ProyectosComponents.js/Proyecto3'
import { useSelector } from 'react-redux'
import galaxyAll2 from './assets/galaxyAll2.jpg'
import Postlinke from './assets/Postlinke.png'
import TechMobile from './assets/TechMobile.png'
import Construccion from './assets/Construccion.webp'

const projects = [
    {
        name: 'NO-flix',
        img: Postlinke,
        description: 'No-flix es una app de series y peliculas, donde puedes agregar favoritos, dejar comentarios, filtrar por categorias y votar por un ranking semanal.',
        linkRepo: 'https://github.com/AugustoOjd/NO-Flix',
        linkDeploy: 'https://augustoojd.github.io/NO-Flix/'
    }
]


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

            
        <Box bgImage={galaxyAll2} bgRepeat={'no-repeat'} bgPosition={'revert'} bgSize={'cover'} h={{base: '1600px', sm: '1800px', md: '700px', lg: '750px', xl: '800px'}} w='100%' pb={'60px'} >
            <Box bgGradient={'linear(to-b, blackAlpha.900, blackAlpha.600)'}>    
                <Heading  bgGradient='linear(to-l,  #7928CA, #FF0080)'  bgClip='text'  fontFamily={'sans-serif'} fontSize={{base: '2xl', sm: '3xl', md: '5xl', lg: '6xl'}} fontWeight={'bold'} textAlign='center' p={2} mb={10}>Proyectos</Heading>
            </Box>
            <Stack direction={{base: 'column', md: 'row'}} spacing={{base: '12px', lg: '30px'}}  p={4} mx={{ sm: '25px', md: '0px', lg: '60px', xl: '120px'}} px={{base: 8, sm: '65px', md: 2, lg: '30px'}} py={{lg: '30px'}}>
            

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