import React from 'react'
import {Button} from 'components/common'
import {ButtonWhatsApp} from '../styles'
import Icon from "assets/illustrations/gpo-whatsapp.svg"

const WhatsApp = () => {
    return (
        <a href="https://wa.me/40741093493" target="_blank"
        rel="noopener noreferrer">
        <Button as={ButtonWhatsApp}>
            <span>
            <img src={Icon} alt="" />
            </span> 
              <span style={{paddingLeft:'1rem'}}> Hívás WhatsAppon!</span>
        </Button>
        </a>
    )
}

export default WhatsApp
