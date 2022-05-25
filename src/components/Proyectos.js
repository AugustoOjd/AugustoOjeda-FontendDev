import React from 'react'
import {Box, Stack, Text, Heading, Divider} from '@chakra-ui/react'
import Proyecto1 from './ProyectosComponents.js/Proyecto1'
import Proyecto2 from './ProyectosComponents.js/Proyecto2'
import Proyecto3 from './ProyectosComponents.js/Proyecto3'

const Proyectos = () => {
return (
    <>
        <Box bg='white' w='100%' p={2} mb={10} mt={10}>
            
            <Heading fontFamily={'sans-serif'} fontSize={{base: 'xl', sm: '2xl', lg: '4xl'}} fontWeight={'bold'} textAlign='center' mb={10}>Proyectos.</Heading>

            <Stack direction={{base: 'column', md: 'row'}} spacing={{base: '12px', lg: '30px'}} borderWidth='1px' borderColor={'red.500'} p={4} mx={{ sm: '25px', md: '0px', lg: '60px', xl: '120px'}} px={{base: 4, sm: '65px', md: 2, lg: '30px'}} py={{lg: '30px'}}>


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
        <Divider/>
    </>
)
}

export default Proyectos