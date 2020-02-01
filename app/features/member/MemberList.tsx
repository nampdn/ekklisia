import React from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import { List } from '@ui-kitten/components'

import { MemberItem } from './MemberItem'

export interface MemberListProps {
  data: any[]
  style?: StyleProp<ViewStyle>
}

export const MemberList = ({ data, style }: MemberListProps) => {
  const renderMemberList = ({ item }) => {
    return <MemberItem key={item.name} member={item} />
  }

  return (
    <View style={[style]}>
      <List data={data} renderItem={renderMemberList} scrollEnabled={false} />
    </View>
  )
}
