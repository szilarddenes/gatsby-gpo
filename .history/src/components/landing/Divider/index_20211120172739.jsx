import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import {Container} from 'components/common'
import {Wrapper, Line, Ford, semafor} from './styles'
import fordSvg from 'assets/illustrations/gpo-ford.svg';


const Divider = ()=>{
    const { theme } = useContext(ThemeContext);
    return(
        <Wrapper as ={Container} >
                <Ford/>
                <Semafor/>
                <Line theme={theme}/>
                
        </Wrapper>
    )

}

export default Divider