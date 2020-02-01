import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Select } from '@ui-kitten/components'

const styles = StyleSheet.create({
  layout: {},
})

export const ActivitySelect = () => {
  const [index, setIndex] = useState(null)
  return (
    <View>
      <Select
        selectedOption={index}
        onSelect={setIndex}
        label="Hoạt Động"
        data={[{ text: 'First' }, { text: 'Second' }]}
      />
    </View>
  )
}
