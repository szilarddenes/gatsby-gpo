import React from 'react'
import useMedia from 'hooks/useMedia'

const JogsiKell = () => {
    const isDesktop = useMedia('(min-width:9px)')
    return (
        <>
        {
        isDesktop ? 
            
            <h1 style={{fontSize:'2rem', color:'#fff', textShadow:'3px 3px 3px rgba(0,0,0,.5)'}}>Jogsi Kell?</h1>
            :
            <h1 style={{fontSize:'2rem'}}>Jogsi Kell?</h1>
        }
        </>
    )
}

export default JogsiKell
