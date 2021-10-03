import React from 'react'
import {Button} from 'components/common'
import {ButtonWhatsApp} from '../styles'
import Icon from "assets/illustrations/gpo-whatsapp.svg"

const WhatsApp = () => {
    return (
        <Button href="/" as={ButtonWhatsApp}>
            <span>
                
                </span> <img src={Icon} alt=""  />
              <span> Hívás WhatsAppon!</span>
        </Button>
    )
}

export default WhatsApp
