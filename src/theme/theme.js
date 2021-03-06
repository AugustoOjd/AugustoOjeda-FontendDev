// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
brand: {
    primary: '#E50914',
    secondary: '#FFFFFF',
    black: 'black',
    neutro: '#FA6B77'
},
}

export default extendTheme({ colors })