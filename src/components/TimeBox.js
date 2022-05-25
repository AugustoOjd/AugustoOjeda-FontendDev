import React from 'react'
import {Box, Button, Circle, Spacer} from '@chakra-ui/react'
import { useEffect, useState, useMemo } from 'react'
import gsap from 'gsap'

const TimeBox = () => {

    // const timeLine = gsap.timeline({defaults: {x: -600, rotation: 0}})

    const [Play, setPlay] = useState(false)
        
    let tween
    useMemo(() => {
        tween = gsap.to(".class", {rotation: 500, x: 300, duration: 1, ease: "none"});
    }, [Play])

    const action = ()=>{
        setPlay(!Play)
        tween.play()
    }
    // document.querySelector("#play").onclick = () => tween.play()
    // document.querySelector("#reverse").onclick = () => tween.reverse();

  return (
    <>
        <Box display={'flex'} h={'40px'} w={'100%'} bg={'gray.100'}>
            <Button onClick={action}>P</Button>
            <Button onClick={()=> tween.reverse()}>R</Button>
            <Circle className='class' size='40px' bg='tomato' color='orange'>
                H
            </Circle>
            

        </Box>
    </>
  )
}

export default TimeBox