import React from 'react'
import { Box, Circle, Icon } from '@chakra-ui/react'

const TegnologiaStyle = ({color, logo, logoB, colorB}) => {


  return (
    <>
        <Circle size={{base: '35px', sm: '60px', md: '70px', lg: '80px'}} color={color || colorB} boxShadow={'base'} p={1} >
                {/* <Circle display={'flex'} justifyContent={'center'} alignItems={'center'} bgColor={'gray.800'} size={'100%'}> */}
                    <Icon  viewBox={'-4 -4 24 23'} boxSize={'100%'}>
                        {logo || logoB}
                    </Icon>
                {/* </Circle> */}
        </Circle>

    </>
  )
}

export default TegnologiaStyle