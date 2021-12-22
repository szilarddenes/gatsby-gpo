import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import {Container} from 'components/common'
import {FullSvg, Wrapper} from './styles'


const Divider2 = ()=>{
    const { theme } = useContext(ThemeContext);
    return(
        <Wrapper as ={Container} >
       <FullSvg/>
                
        </Wrapper>
    )

}

export default Divider2