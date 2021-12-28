import React, { useContext, useState } from "react"
import Popup from "components/common/GDPR/Popup.jsx"
import { ThemeContext } from 'providers/ThemeProvider';


const GDPR = () => {
  const [isOpen, setIsOpen] = useState(false)
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <br />
      <small>
        *Az Elküldöm gomb megnyomásával kijelentem, hogy megismertem és
        elfogadom az
        <div id="linkHighlight">
          <a onClick={togglePopup} theme={theme}>
            Adatkezelési tájékoztatót.
          </a>
        </div>
      </small>
      {isOpen && <Popup handleClose={togglePopup} />}
    </>
  )
}

export default GDPR
