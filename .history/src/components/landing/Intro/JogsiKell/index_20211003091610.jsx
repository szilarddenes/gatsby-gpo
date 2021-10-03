import React from 'react'
import useMedia from 'hooks/useMedia'

const JogsiKell = () => {
    const isDesktop = useMedia('(min-width:960px)')
    return (
        <>
        {
        isDesktop ? 
            
            <h2 style={{'fontSize':'2rem', 'color':'#fff'}}>Jogsi Kell?</h2>
            :
            <h1 style={{'fontSize':'2rem'}}>Jogsi Kell?</h1>
        }
        </>
    )
}

export default JogsiKell
