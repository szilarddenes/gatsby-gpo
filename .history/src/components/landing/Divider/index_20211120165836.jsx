import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import {Container} from 'components/common'
import {Wrapper, Line} from './styles'


import Card1Img from 'assets/illustrations/card1_img.webp'

const Divider = ()=>{
    const { theme } = useContext(ThemeContext);
    return(
        <Wrapper as ={Container} >
                {/* <img src={Card1Img} /> */}
                <Ford>
                <Line theme={theme}/>
                
        </Wrapper>
    )

}

export default Divider