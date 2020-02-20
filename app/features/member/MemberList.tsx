import React, { useState, useEffect } from 'react'
import { View, StyleProp, ViewStyle, StyleSheet } from 'react-native'
import { Spinner } from '@ui-kitten/components'

import { MemberItem } from './MemberItem'

export interface MemberListProps {
  data: any[]
  disabled?: boolean
  loading?: boolean
  onChange?: (data: any[]) => void
  style?: StyleProp<ViewStyle>
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#dedede',
    opacity: 50,
  },
})

export const MemberList = ({
  data,
  style,
  loading = false,
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
      {loading && <Spinner style={styles.loading} />}
    </View>
  )
}
