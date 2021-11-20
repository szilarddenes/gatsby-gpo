import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import {Container, Centerd} from 'component/comm'
import Card1Img from 'assets/illustrations/card1_img.webp'

const Divider = ()=>{
    const { theme } = useContext(ThemeContext);
    return(
        <Wrapper as ={Container}>

        </Wrapper>
    )

}

export default Divider