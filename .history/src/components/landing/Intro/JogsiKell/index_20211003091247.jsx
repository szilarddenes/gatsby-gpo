import React from 'react'
import useMedia from 'hooks/useMedia'

const isDesktop = useMedia('(min-width:960px)')
const JogsiKell = () => {
    return (
        <>
        {
        isDektop : 
            
            <h1 style={{'fontSize':'2rem'}}>Jogsi Kell?</h1>
            
        }
        </>
    )
}

export default JogsiKell
