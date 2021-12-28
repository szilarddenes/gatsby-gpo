import React, { useContext, useState } from "react"
import Popup from "components/common/GDPR/Popup.jsx"
import { ThemeContext } from 'providers/ThemeProvider';


const GDPR = () => {
  const theme = ThemeContext  
  const [isOpen, setIsOpen] = useState(false)
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
 

  return (
    <>
      <br />
      <small>
        *Az Elküldöm gomb megnyomásával kijelentem, hogy megismertem és
        elfogadom az <span>
          <a theme={theme} onClick={togglePopup} id="linkHighlight" >
            Adatkezelési tájékoztatót.
          </a>
          </span>
      </small>
      
    </>
  )
}

export default GDPR
