import React from 'react'
import { Avatar } from '@chakra-ui/react'
import selfie1 from '../assets/selfie1.jpeg'
import selfie2 from '../assets/selfie2.jpg'
import selfie3 from '../assets/selfie3.jpg'
import selfie4 from '../assets/selfie4.jpeg'
import { useSelector } from 'react-redux'

const AvatarIcon = () => {

    const theme = useSelector((state)=> state.theme.value)

    return (
    <>
        <Avatar size='lg' name='Ryan Florence' src={theme ? selfie4 : selfie1} />
    </>
)
}

export default AvatarIcon