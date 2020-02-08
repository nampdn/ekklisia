import React, { useState, useEffect } from 'react'
import SwipeButton from 'rn-swipe-button'
import IconFA from 'react-native-vector-icons/FontAwesome'

const ArrowIcon = () => <IconFA name="check" size={30} color="#5273bf" />

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
    <SwipeButton
      railBackgroundColor="#5273bf"
      railFillBackgroundColor="#21469c"
      railBorderColor="transparent"
      railFillBorderColor="transparent"
      thumbIconBorderColor="transparent"
      thumbIconBackgroundColor="#fff"
      thumbIconComponent={ArrowIcon}
      swipeSuccessThreshold={70}
      title={title || 'Kéo để xác nhận!'}
      titleColor="#fff"
      disabled={!active}
      onSwipeSuccess={onConfirm}
      {...props}
    />
  )
}
