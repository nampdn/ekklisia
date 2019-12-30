import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import {
  Divider,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components'

import { useSelector, useDispatch } from 'react-redux'
import { selectScanningData } from '../model'
import { Dispatch } from '../../rematch'

import { Scanner } from '../component'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
})

const BackIcon = style => <Icon {...style} name="arrow-ios-downward-outline" />
export const ScannerScreen = ({ navigation }) => {
  const from = navigation.getParam('from', '')
  const [isMounted, setIsMounted] = useState(true)
  const scanningData = useSelector(selectScanningData)
  const dispatch = useDispatch<Dispatch>()
  const goBack = () => {
    navigation.goBack()
  }

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={goBack} />
  )

  useEffect(() => {
    if (scanningData.data !== '') {
      // Reset after 3000ms of not consumming
      setTimeout(() => {
        if (scanningData.data !== '') {
          dispatch.scanner.scannerReset()
        }
      }, 3000)
      goBack()
    }
  }, [scanningData])

  return (
    <SafeAreaView style={[styles.container, styles.droidSafeArea]}>
      <TopNavigation
        title="Quét Mã"
        alignment="start"
        leftControl={BackAction()}
      />
      <Divider />
      <Layout level="1" style={{ flex: 1 }}>
        <Scanner data={{ from }} isMounted={isMounted} />
      </Layout>
    </SafeAreaView>
  )
}
