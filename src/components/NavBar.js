import React from 'react'
import { Box, Button, DarkMode } from '@chakra-ui/react'
import AvatarIcon from './NavBarComponents/AvatarIcon'
import SpanishFlag from './NavBarComponents/SpanishFlag'
import EnglishFlag from './NavBarComponents/EnglishFlag'
import GithubButton from './NavBarComponents/GithubButton'

const NavBar = () => {
    return (
    <>
            <Box bg='brand.primary' w='100%' p={4} color='brand.secondary'>
            <AvatarIcon/>
            <Button colorScheme='pink' size='md'>
                Button
            </Button>
            <GithubButton/>
            <DarkMode/>
            <SpanishFlag/>
            <EnglishFlag/>
            </Box>
    </>
    )
}

export default NavBar