import React, { useState, useEffect } from 'react'
import data from './data'

const Slider = () => {
    const [people, setPeople] = useState(data)
    const [index, setIndex] = useState(0)

    return (
        <>
            <div className="section-center">

                {people.map((person, personIndex) => {
                    const { id, image, name,quote } = person;
                    return (
                    <div key={id}>
                        <img src={image} alt={name} callsName='person-img'/>
                    <h5>
                        {quote}
                    </h5>
                    </div>
                    )
                })}

                <button className='prev'>
                    balra
                </button>
                <button className=''>
                    jobbra
                </button>
            </div>
        </>
    )


}

export default Slider