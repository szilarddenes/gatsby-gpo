import React from 'react'
import {Button} from 'components/common'
import {ButtonWhatsApp} from '../styles'
import Icon from 'illustrations/'

const WhatsApp = () => {
    return (
        <Button href="/" as={ButtonWhatsApp}>
                Hívás WhatsAppon!
        </Button>
    )
}

export default WhatsApp
