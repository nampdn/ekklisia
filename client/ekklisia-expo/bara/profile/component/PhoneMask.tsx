import React, { useState, useEffect } from 'react'
import { Text } from '@ui-kitten/components'
import mask from 'mask-email-phone'

export const PhoneMask = ({ phoneNumber }) => {
  const [displayPhone, setDisplayPhone] = useState(phoneNumber)

  useEffect(() => {
    if (phoneNumber) {
      setDisplayPhone(`(${mask(phoneNumber.replace('+84', '0'))})`)
    }
  }, [phoneNumber])

  return <Text category="c1">{displayPhone}</Text>
}
