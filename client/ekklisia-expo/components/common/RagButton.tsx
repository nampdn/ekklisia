import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, ButtonProps } from '@ui-kitten/components'

const styles = StyleSheet.create({
  rag: {
    borderStyle: 'dashed',
  },
})

export interface RagButtonProps extends ButtonProps {}

export const RagButton = ({ style, ...props }: RagButtonProps) => {
  return <Button appearance="outline" style={[styles.rag, style]} {...props} />
}
