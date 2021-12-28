import React, {useContext, useState} from 'react'
import Popup from "components/common/GDPR/Popup.jsx"
const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
      {isOpen && <Popup handleClose={togglePopup} />}

const GDPR = ()=>{

    return(

    )
}