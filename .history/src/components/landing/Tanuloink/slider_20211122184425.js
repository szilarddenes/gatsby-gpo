import React, { useState, useEffect } from 'react'
import data from './data'

const Slider = () => {
    const [people, setPeople] = useState(data)
    const [index, setIndex] = useState(0)

    // debugging the last and very first in the iteration
    useEffect(() => {
        const lastIndex = people.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }

    }, [index, people])

    // autoplay

    useEffect(() => {
       let slider = setInterval(() =>{
            setIndex(index + 1)
        },3000)
        return ()=> clearInterval(slider)


    },[index])


    return (
        <>
            <div className="section-center">

                {people.map((person, personIndex) => {
                    const { image, name, quote } = person

                    let position = 'nextSlide'
                    if (personIndex === index) {
                        position = 'activeSlide'
                    }
                    if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                        position = 'lastSlide'
                    }

                    return (
                        <article  className={position}>
                            <img src={image} alt={name} callsName='person-img' />
                            <h5>
                                {quote}
                            </h5>
                        </article>
                    )
                })}

                <button className='prev' onClick={() => setIndex(index - 1)}>
                   <i>></i>
                </button>
                <button className='next' onClick={() => setIndex(index + 1)}>
                    <i>j</i>
                </button>
            </div>
        </>
    )


}

export default Slider