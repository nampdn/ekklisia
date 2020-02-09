import React from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import { List } from '@ui-kitten/components'

import { MemberItem } from './MemberItem'

export interface MemberListProps {
  data: any[]
  style?: StyleProp<ViewStyle>
}

export const MemberList = ({ data, style }: MemberListProps) => {
  const renderMemberList = ({ item }, index) => {
    return <MemberItem key={item.name} member={item} index={index} />
  }

  return (
    <View style={[style]}>
      {data.map((item, index) => renderMemberList({ item }, index + 1))}
    </View>
  )
}
