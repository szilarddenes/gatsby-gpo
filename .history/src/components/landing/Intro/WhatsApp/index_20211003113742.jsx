import React from 'react'
import {Button} from 'components/common'
import {ButtonWhatsApp} from '../styles'
"assets/illustrations/gpo-logo-bir.svg"

const WhatsApp = () => {
    return (
        <Button href="/" as={ButtonWhatsApp}>
              <Icon />  
              Hívás WhatsAppon!
        </Button>
    )
}

export default WhatsApp
