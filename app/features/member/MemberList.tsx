import React from 'react'
import { List } from '@ui-kitten/components'

import { MemberItem } from './MemberItem'

export interface MemberListProps {
  data: any[]
}

export const MemberList = ({ data }: MemberListProps) => {
  const renderMemberList = ({ item }) => {
    return <MemberItem key={item.name} member={item} />
  }

  return (
    <List data={data} renderItem={renderMemberList} scrollEnabled={false} />
  )
}
