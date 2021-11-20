import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import {Container, Centered} from 'components/common'


import Card1Img from 'assets/illustrations/card1_img.webp'

const Divider = ()=>{
    const { theme } = useContext(ThemeContext);
    return(
        <>
                <img src={svg} />
                {/* HELLO */}
        </>
    )

}

export default Divider