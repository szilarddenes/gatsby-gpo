import React from 'react'
import useMedia from 'hooks/useMedia'
const isDesktop = useMedia('(min-width:960px)')

const Jelentkezz = () => {
    return (
        <h4 style={{
            fontSize:'1.5rem',
            paddingTop:'1rem',
            marginBottom: '0.5rem'
        }}
        >
            Jelentkezz most!</h4>

    )
}

export default Jelentkezz
