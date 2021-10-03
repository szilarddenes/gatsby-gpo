import React from 'react'
import {Button} from 'components/common'
import {ButtonWhatsApp} from '../styled'

const WhatsApp = () => {
    return (
        <Button href="/" as={ButtonWhatsApp}>
                Hívás WhatsAppon!
        </Button>
    )
}

export default WhatsApp