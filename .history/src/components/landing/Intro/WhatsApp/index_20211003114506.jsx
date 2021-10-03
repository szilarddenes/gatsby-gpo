import React from 'react'
import {Button} from 'components/common'
import {ButtonWhatsApp} from '../styles'
import Icon from "assets/illustrations/gpo-whatsapp.svg"

const WhatsApp = () => {
    return (
        <Button href="/" as={ButtonWhatsApp}>
             <img src={Icon} alt=""  />
              Hívás WhatsAppon!
        </Button>
    )
}

export default WhatsApp
