import React from 'react'
import {Box, Stack, Heading} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import galaxyAll2 from './assets/galaxyAll2.jpg'
import Postlinke from './assets/Postlinke.png'
import TechMobile from './assets/TechMobile.png'
import pokeApi from './assets/pokeApi.png'
import ProyectoStyle from './ProyectosComponents.js/ProyectoStyle'
import ProyectoStyleDark from './ProyectosComponents.js/ProyectoStyleDark'
import main from './assets/main.jpg'
import homeUC from './assets/homeUC.png'

const projects = [
    {
        name: 'U-Culture',
        img: homeUC,
        description: 'U-culture es una app fullstack de preguntas y seleccion simple, sobre cultura general, gana puntos y aparece en el top 5',
        descriptionEn: 'U-culture is a fullstack app of questions and simple selection, about general culture, earn points and appear in the top 5',
        linkRepo: 'https://github.com/AugustoOjd/school-front',
        linkDeploy: 'https://u-culture-augustoojd.vercel.app/'
    },
    {
        name: 'Custom-Store',
        img: main,
        description: 'es un ecommerce full stack, usando nextjs, typescript, mongdb atlas, auth de logins, users y seccion de administrador (agregar y editar productos) .',
        descriptionEn: 'Its a full stack app and was bulding with nextjs, typescript, mongdb atlas, auth logins and a section of admin (add and edit products).',
        linkRepo: 'https://github.com/AugustoOjd/custom-store',
        linkDeploy: 'https://custom-store-augusto.herokuapp.com/'
    },
    {
        name: 'NO-flix',
        img: Postlinke,
        description: 'es una app de series y peliculas, donde puedes agregar favoritos, dejar comentarios, filtrar por categorias y votar por un ranking semanal.',
        descriptionEn: 'Its an app for series and movies, where you can add favorites, leave comments, filter by categories and vote for a weekly ranking.',
        linkRepo: 'https://github.com/AugustoOjd/NO-Flix',
        linkDeploy: 'https://augustoojd.github.io/NO-Flix/'
    },
    {
        name: 'TechMobile',
        img: TechMobile,
        description: 'es una ecommerce de telefonos, puedes comparar equipos, buscar por marcas, añadir al carrito y simular una compra.',
        descriptionEn: 'Its a phone ecommerce, you can compare equipment, search by brand, add to cart and simulate a purchase.',
        linkRepo: 'https://github.com/AugustoOjd/TechMobil_Augusto-Ojeda',
        linkDeploy: 'https://augustoojd.github.io/TechMobil_Augusto-Ojeda/'
    },
    {
        name: 'Poke-api',
        img: pokeApi,
        description: 'es un clasico poke-api, fue desarrolada en nextjs y typeScript.',
        descriptionEn: 'its a classic poke-api, its was building in nextjs and typescript .',
        linkRepo: 'https://github.com/AugustoOjd/Poke-Nextjs',
        linkDeploy: 'https://pokemons-nextjs-fawn.vercel.app/'
    }
]


const Proyectos = () => {

    const theme = useSelector((state)=> state.theme.value)
    const traslate = useSelector((state)=> state.language.value)

return (
    <>
        {
            
theme
            
?
            
            <Box bg='white' w='100%' p={2} pb={'60px'} mt={10} borderBottomWidth={1}>
                        
            <Heading bgGradient='linear(to-l, red.500, #FF0080)' bgClip='text' fontFamily={'sans-serif'} fontSize={{base: '2xl', sm: '3xl', md: '5xl', lg: '6xl'}} fontWeight={'bold'} textAlign='center' mb={10}>
                {
                
                traslate

                ?

                'Proyectos'
                :
                
                'Projects'
                
                }</Heading>

            <Stack direction={{base: 'column', md: 'row'}} spacing={{base: '15px', lg: '30px'}} borderWidth='1px' borderColor={'red.500'} borderRadius={'base'} p={4} 
            mx={{ sm: '25px', md: '0px', lg: '60px', xl: '120px'}} px={{base: 4, sm: '20px', md: '30px', lg: '30px'}} py={{lg: '30px'}}  >
            

            <Stack direction={'row'} spacing={{base: '10px', xl: '20px'}} w={{base: '100%', md: '100%'}} p={5} overflowX={'scroll'}>
                {projects.map(e=> (<ProyectoStyle key={e.name} name={e.name} img={e.img} description={traslate ? e.description : e.descriptionEn} linkRepo={e.linkRepo} linkDeploy={e.linkDeploy} />))}
            </Stack>

            </Stack>
        
        </Box>

:

            
        <Box bgImage={galaxyAll2} bgRepeat={'no-repeat'} bgPosition={'revert'} bgSize={'cover'} h={{base: '650px', sm: '710px', md: '800px', lg: '850px', xl: '850px'}} w='100%' pb={'60px'} >
            <Box bgGradient={'linear(to-b, blackAlpha.900, blackAlpha.600)'}>    
                <Heading  bgGradient='linear(to-l,  #7928CA, #FF0080)'  bgClip='text'  fontFamily={'sans-serif'} fontSize={{base: '2xl', sm: '3xl', md: '5xl', lg: '6xl'}} fontWeight={'bold'} textAlign='center' p={2} mb={10}>
                {
                
                traslate

                ?

                'Proyectos'
                :
                
                'Projects'
                
                }
                </Heading>
            </Box>
            <Stack direction={{base: 'column', md: 'row'}} spacing={{base: '12px', lg: '30px'}}  p={4} mx={{ sm: '25px', md: '0px', lg: '60px', xl: '120px'}} 
            px={{base: 8, sm: '20px', md: '30px', lg: '30px'}} py={{lg: '30px'}}  >
            

                <Stack direction={'row'} spacing={{base: '15px', xl: '20px'}} w={{base: '100%', md: 'auto'}} p={5} overflowX={'scroll'}>
                    {projects.map(e=> (<ProyectoStyleDark key={e.name} name={e.name} img={e.img} description={traslate ? e.description : e.descriptionEn} linkRepo={e.linkRepo} linkDeploy={e.linkDeploy} />))}
                </Stack>

            </Stack>
        
        </Box>
        }
    </>
)
}

export default Proyectos