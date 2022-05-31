import React, {useEffect} from 'react'
import { Button } from '@chakra-ui/react'
import { SiGithub } from "react-icons/si"
import { gsap } from 'gsap'

const GithubButton = () => {

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1.02, duration: 0.2 });
      };
      
      const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1, duration: 0.2 });
      };
    

  return (
    <>
    <Button  onMouseEnter={onEnter} onMouseLeave={onLeave} leftIcon={<SiGithub/>} colorScheme='red' variant='outline' display={{base: 'none', sm: 'flex'}}>
        <a href='https://github.com/AugustoOjd'>
            GitHub
        </a>

    </Button>
    <Button onMouseEnter={onEnter} onMouseLeave={onLeave} colorScheme='red' variant='outline' display={{base: 'flex', sm: 'none'}}>
        <a href='https://github.com/AugustoOjd'>
            <SiGithub/>
        </a>
    </Button>
    </>
)
}

export default GithubButton