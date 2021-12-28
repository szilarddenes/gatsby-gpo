import React, {useContext, useState} from 'react'
import Popup from "components/common/GDPR/Popup.jsx"

      {isOpen && <Popup handleClose={togglePopup} />}

const GDPR = ()=>{
    const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

    return(

    )
}