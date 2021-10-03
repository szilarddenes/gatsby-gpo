import React from 'react'
import {Button} from 'components/common'
import {ButtonWhatsApp} from '../styles'
import {Icon} from 'illustrations/gpo-whatsapp.svg'

const WhatsApp = () => {
    return (
        <Button href="/" as={ButtonWhatsApp}>
              <Icon />  Hívás WhatsAppon!
        </Button>
    )
}

export default WhatsApp
