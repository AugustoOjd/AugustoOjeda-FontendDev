import React, {useEffect} from 'react'
import { Button } from '@chakra-ui/react'
import { SiGithub } from "react-icons/si"
import { gsap } from 'gsap'

const GithubButton = () => {

    useEffect(() => {
        gsap.fromTo( '.button', {duration: 5, scale: 2}, { scale: 1, ease: "power1.out"})
    }, [])
    

  return (
    <>
    <Button className='button' leftIcon={<SiGithub/>} colorScheme='red' variant='outline' display={{base: 'none', sm: 'flex'}}>
        <a href='https://github.com/AugustoOjd'>
            GitHub
        </a>

    </Button>
    <Button className='button' colorScheme='red' variant='outline' display={{base: 'flex', sm: 'none'}}>
        <a href='https://github.com/AugustoOjd'>
            <SiGithub/>
        </a>
    </Button>
    </>
)
}

export default GithubButton