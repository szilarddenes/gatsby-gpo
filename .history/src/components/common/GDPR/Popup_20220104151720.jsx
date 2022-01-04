import React, {useContext} from "react";
import {PopupStyles} from './styles'
import { ThemeContext } from "providers/ThemeProvider"
import Html from "./html.jsx"


const Popup = props => {
  const { theme } = useContext(ThemeContext);

  return (
    <PopupStyles theme={theme}>
    <div className="popup-box"theme={theme} >
      <div className="box" theme={theme}>
        <span role="button" className="close-icon" onClick={props.handleClose} onKeyDown={props.handleClose}>x</span>
        {Html}

    </div>
    </div>
    </PopupStyles>
  );
};

export default Popup;