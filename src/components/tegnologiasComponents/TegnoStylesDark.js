import React from 'react'
import {Box, Circle, Icon} from '@chakra-ui/react'

const TegnoStylesDark = ({logo, color, logoB, colorB}) => {
  return (
    <>              
    <Box bgGradient='linear(to-l, #7928CA, #FF0080)' transform={'rotate(-10deg)'} p={1} borderRadius={'xl'}>
        <Box bgGradient='linear(to-bl, #5609a3, #FF0080)' transform={'rotate(5deg)'} p={1} borderRadius={'xl'}>
                    <Circle transform={'rotate(5deg)'} size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color={color || colorB} bgColor={'blackAlpha.900'} boxShadow={'base'} p={1} >
                        {/* <Box w={{base: '35px', sm: '50px', md: '60px', lg: '60px'}} h={'auto'} p={1.5}> */}
                            <Icon  viewBox={'-4 -4 24 23'} boxSize={'100%'}>
                                {logo || logoB}
                            </Icon>
                        {/* </Box> */}
                    </Circle>
        </Box>
    </Box>

    </>
  )
}

export default TegnoStylesDark