import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import {Container} from 'components/common'
import {Wrapper, Line} from './styles'


import Card1Img from 'assets/illustrations/card1_img.webp'

const Divider = ()=>{
    const { theme } = useContext(ThemeContext);
    return(
        <Wrapper as ={Container} theme=>
                {/* <img src={Card1Img} /> */}
                <Line/>
                HELLO
                
        </Wrapper>
    )

}

export default Divider