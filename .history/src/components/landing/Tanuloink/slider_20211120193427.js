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

                    let position = 'nexSlide'
                    if(personIndex===index){
                        position='acti'
                    }

                    return (
                    <article key={id} className={position}>
                        <img src={image} alt={name} callsName='person-img'/>
                    <h5>
                        {quote}
                    </h5>
                    </article>
                    )
                })}

                <button className='prev'>
                    bal
                </button>
                <button className='next'>
                    jobb
                </button>
            </div>
        </>
    )


}

export default Slider