import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import {Container, Centered} from 'components/common'
import {Wrapper} from 'styles'


import Card1Img from 'assets/illustrations/card1_img.webp'

const Divider = ()=>{
    const { theme } = useContext(ThemeContext);
    return(
        <>
                {/* <img src={Card1Img} /> */}
                HELLO
                
        </>
    )

}

export default Divider