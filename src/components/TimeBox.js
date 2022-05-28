import React from 'react'
import {Box, Button, Circle} from '@chakra-ui/react'
import { useState, useMemo } from 'react'
import gsap from 'gsap'
import Sky from './assets/Sky.png'
import day from './assets/day.jpg'

const TimeBox = () => {

    // const timeLine = gsap.timeline({defaults: {x: -600, rotation: 0}})

    const [Play, setPlay] = useState(false)
        
    let tween
    let bg
    useMemo(() => {
        tween = gsap.to(".class", {rotation: 500, x: 800, duration: 1.5, ease: "power1.out"});
        // bg = gsap.to(".dark", { backgroundImage: day})
        bg = gsap.to(".dark", { backgroundImage: `url(${Sky})`, duration: 0.5, ease: "slow(0.5, 0.8)"})
    }, [Play])

    const actionP = ()=>{
        setPlay(!Play)
        tween.play()
        bg.play()
    }
    const actionR = ()=>{
        // setPlay(!Play)
        tween.reverse()
        bg.reverse(1)
    }
    // document.querySelector("#play").onclick = () => tween.play()
    // document.querySelector("#reverse").onclick = () => tween.reverse();

  return (
    <>
        <Box  bgImage={day} bgSize={'cover'} h={'50px'} w={'100%'} >
            
            <Box className='dark' h={'100%'} w={'100%'}>
                <Box  mx={'400px'}  display={'flex'}>
                    <Button onClick={actionP}>P</Button>
                    <Button onClick={actionR}>R</Button>
                    <Circle className='class' size='50px' bg='tomato' color='orange'>
                        H
                    </Circle>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default TimeBox