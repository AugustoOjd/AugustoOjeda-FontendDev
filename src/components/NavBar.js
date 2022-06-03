import React from 'react'
import { Box, Flex, Spacer, HStack} from '@chakra-ui/react'
import AvatarIcon from './NavBarComponents/AvatarIcon'
import SpanishFlag from './NavBarComponents/SpanishFlag'
import EnglishFlag from './NavBarComponents/EnglishFlag'
import GithubButton from './NavBarComponents/GithubButton'
import LinkedinButton from './NavBarComponents/LinkedinButton'
import DarkMode from './NavBarComponents/DarkMode'
import { useSelector } from 'react-redux'


const NavBar = () => {

    const theme = useSelector((state)=> state.theme.value)

    return (
    <>  

{       

    theme

    ?

    <Box zIndex={'sticky'} bgColor={'white'} position={'sticky'} top={0} w='100%' p={4} borderBottomWidth={1} >
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

                    <HStack spacing={1}>
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
        
        :

        <Box zIndex={'sticky'} position={'sticky'} top={0} bg={'blackAlpha.900'} w='100%' p={4} borderBottomWidth={1} borderColor={'purple.800'} >
        <Flex>

                <HStack >
                    <Box>
                        <AvatarIcon/>
                    </Box>
                    <Box>
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
        
        }
    </>
    )
}

export default NavBar