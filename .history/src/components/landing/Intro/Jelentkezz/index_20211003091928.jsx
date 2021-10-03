import React from 'react'
import useMedia from 'hooks/useMedia'

const Jelentkezz = () => {
    const isDesktop = useMedia('(min-width:960px)')
    return (
        <>
        {
            isDesktop ?
        <h4 style={{
            fontSize:'1.5rem',
            paddingTop:'1rem',
            marginBottom: '0.5rem'
        }}
        >
            Jelentkezz most!</h4>
            :
            <h4 style={{
                fontSize:'1.5rem',
                
            >
                Jelentkezz most!</h4>

    }
    </>
    )   
}

export default Jelentkezz
