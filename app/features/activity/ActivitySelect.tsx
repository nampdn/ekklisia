import React, { useState } from 'react'
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { Select } from '@ui-kitten/components'

import { unit } from '../styles'

const styles = StyleSheet.create({
  layout: {
    marginTop: unit,
    marginBottom: unit,
  },
})

export interface ActivitySelectProps {
  style?: StyleProp<ViewStyle>
}

export const ActivitySelect = ({ style }: ActivitySelectProps) => {
  const [index, setIndex] = useState({ text: 'Nhóm Thanh Niên' })
  return (
    <View style={[styles.layout, style]}>
      <Select
        selectedOption={index}
        onSelect={setIndex as any}
        placeholder="Chọn hoạt động"
        label="Hoạt Động"
        data={[
          { text: 'Nhóm Thanh Niên' },
          { text: 'Học Kinh Thánh' },
          { text: 'Thăm Viếng' },
        ]}
      />
    </View>
  )
}
