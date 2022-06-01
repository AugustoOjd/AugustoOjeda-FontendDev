import React from 'react'
import { Box, Flex, Spacer, HStack} from '@chakra-ui/react'
import AvatarIcon from './NavBarComponents/AvatarIcon'
import SpanishFlag from './NavBarComponents/SpanishFlag'
import EnglishFlag from './NavBarComponents/EnglishFlag'
import GithubButton from './NavBarComponents/GithubButton'
import LinkedinButton from './NavBarComponents/LinkedinButton'
import DarkMode from './NavBarComponents/DarkMode'

const NavBar = () => {
    return (
    <>  
        <Box bg='brand.secondary' w='100%' p={4} color='brand.primary' borderBottomWidth={2} >
        <Flex>

                <HStack >
                    <Box>
                        <AvatarIcon/>
                    </Box>
                    <Box >
                        <DarkMode/>
                    </Box>

                </HStack>

                <Spacer />

                <HStack>
                    <Box>
                        <LinkedinButton/>
                    </Box>
                    <Box>
                        <GithubButton/>
                    </Box>
                    <Box>
                        <SpanishFlag/>
                    </Box>
                    <Box>
                        <EnglishFlag/>
                    </Box>
                </HStack>

        </Flex>
        </Box>
    </>
    )
}

export default NavBar