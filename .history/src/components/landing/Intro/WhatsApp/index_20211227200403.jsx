import React from 'react'
import {Button} from 'components/common'
import {ButtonWhatsApp} from '../styles'
import Icon from "assets/illustrations/gpo-whatsapp.svg"

const WhatsApp = () => {
    return (
        <Button href="href="https://wa.me/<number>" target="_blank":0040751126339" as={ButtonWhatsApp}>
            <span>
            <img src={Icon} alt=""  />
            </span> 
              <span style={{paddingLeft:'1rem'}}> Hívás WhatsAppon!</span>
        </Button>
    )
}

export default WhatsApp