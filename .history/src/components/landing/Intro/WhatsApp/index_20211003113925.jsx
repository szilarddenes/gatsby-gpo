import React from 'react'
import {Button} from 'components/common'
import {ButtonWhatsApp} from '../styles'
import Icon from "assets/illustrations/gpo-what.svg"

const WhatsApp = () => {
    return (
        <Button href="/" as={ButtonWhatsApp}>
             <img src={Icon} alt="" width={90}
     height={35} />
              Hívás WhatsAppon!
        </Button>
    )
}

export default WhatsApp
