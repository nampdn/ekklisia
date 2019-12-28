import React from 'react'
import { Text } from '@ui-kitten/components'

export interface MoreInfoProps {
  label?: string
  content: string
  category?: string
}
export const MoreInfo = (props: MoreInfoProps) => {
  const { label, content, category = 'p2' } = props
  return (
    <Text category={category}>
      {label && content ? label + ': ' : null}
      {content ? content + '\n' : null}
    </Text>
  )
}
