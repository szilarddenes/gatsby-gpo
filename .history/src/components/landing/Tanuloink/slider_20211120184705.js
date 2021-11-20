import React, { useState, useEffect } from 'react'
import data from './data'

const Slider = () => {
    const [people, setPeople] = useState(data)
    const [index, setIndex] = useState(0)

    return (
        <>
            <div className="section-center">
                {people.map((person, personIndex) => {
                    const { id, image, name } = person;
                    return < key={id}>
                        <img src="image" alt="name" callsName='person-img'/>
                    </>
                })}
            </div>
        </>
    )


}

export default Slider