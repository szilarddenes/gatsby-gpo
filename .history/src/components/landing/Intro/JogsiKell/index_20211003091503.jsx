import React from 'react'
import useMedia from 'hooks/useMedia'

const JogsiKell = () => {
    const isDesktop = useMedia('(min-width:960px)')
    return (
        <>
        {
        isDektop ? 
            
            <h1 style={{'fontSize':'2rem', 'color':'#000'}}>Jogsi Kell?</h1>
            :
            <h1 style={{'fontSize':'2rem'}}>Jogsi Kell?</h1>
        }
        </>
    )
}

export default JogsiKell
