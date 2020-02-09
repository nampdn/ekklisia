import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Button } from '@ui-kitten/components'

import { unit } from '../styles'

const styles = StyleSheet.create({
  container: {
    marginTop: 2 * unit,
    marginBottom: unit,
  },
})

export interface ConfirmSliderProps {
  disabled?: boolean
  title?: string
  onConfirm?: (data: any) => void
}

export const ConfirmSlider = ({
  disabled,
  title,
  onConfirm,
  ...props
}: ConfirmSliderProps) => {
  const [active, setActive] = useState(true)

  useEffect(() => {
    setActive(!disabled)
  }, [disabled])

  return (
    <Button style={styles.container} onPress={onConfirm}>
      Xác Nhận
    </Button>
  )
}
