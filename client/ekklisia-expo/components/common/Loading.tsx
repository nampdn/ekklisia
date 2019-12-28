import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Spinner } from '@ui-kitten/components'

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
})

export const Loading = ({ isLoading = false }: any) =>
  isLoading && (
    <View style={styles.loading}>
      <Spinner size="large" />
    </View>
  )
