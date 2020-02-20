import React, { useState, useEffect } from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'

import { MemberItem } from './MemberItem'

export interface MemberListProps {
  data: any[]
  disabled?: boolean
  onChange?: (data: any[]) => void
  style?: StyleProp<ViewStyle>
}

export const MemberList = ({
  data,
  style,
  onChange,
  disabled,
}: MemberListProps) => {
  const [list, setList] = useState(data)

  const update = (index: number) => (checked: boolean) => {
    list[index].checked = checked
    onChange && onChange(list)
  }

  const renderMemberList = ({ item }: any, index: number) => {
    return (
      <MemberItem
        key={item.id}
        member={item}
        disabled={disabled}
        checked={item.checked}
        onCheck={update(index)}
        index={index}
      />
    )
  }

  useEffect(() => {
    setList(data)
  }, [data])

  return (
    <View style={[style]}>
      {data.map((item, index) => renderMemberList({ item }, index))}
    </View>
  )
}
