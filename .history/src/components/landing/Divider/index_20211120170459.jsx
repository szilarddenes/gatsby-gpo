import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import {Container} from 'components/common'
import {Wrapper, Line, Ford} from './styles'
import fordSvg from 'assets/illustrations/gpo-ford.svg';


import Card1Img from 'assets/illustrations/card1_img.webp'

const Divider = ()=>{
    const { theme } = useContext(ThemeContext);
    return(
        <Wrapper as ={Container} >
                {/* <img src={Card1Img} /> */}
                fordSvg
                <Ford/>
                <Line theme={theme}/>
                
        </Wrapper>
    )

}

export default Divider