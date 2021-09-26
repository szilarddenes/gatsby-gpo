import React from 'react'

function Test() {
    return (
        <div>
            Test component;
            pictures will be fetched here
            {() => {
                console.log('Hello from Test component.')

            }}
        </div>
    )

}

export default Test
