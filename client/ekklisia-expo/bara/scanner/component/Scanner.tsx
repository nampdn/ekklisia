import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useBara } from '@bit/barajs.portions.react'
import { Button, Text } from '@ui-kitten/components'

import { Audio } from 'expo-av'
import { BarCodeScanner } from 'expo-barcode-scanner'
import * as Permissions from 'expo-permissions'

import PQueue from 'p-queue'

const queue = new PQueue({ concurrency: 1 })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 100,
    padding: 10,
  },
  button: {
    margin: 8,
  },
  qr: {
    backgroundColor: '#fff',
    padding: 8,
    margin: 4,
    borderRadius: 20,
  },
})

const SOUNDS = {
  SCAN_ERROR: require('../../../assets/sounds/scan_error.mp3'),
  SCAN_SUCCESS: require('../../../assets/sounds/scan_success.mp3'),
  SCAN_ACCEPT: require('../../../assets/sounds/scan_accept.mp3'),
}

const playSound = (whichSound: any) =>
  queue.add(async () => {
    const soundObject = new Audio.Sound()
    try {
      await soundObject.loadAsync(whichSound, { shouldPlay: true })
    } catch (error) {
      console.log('Play sound error:', error)
    }
  })

const handlers = ['onBarCodeScanned', 'onReset']

const BarcodeScanner = (props: any) => {
  const [scanned, setScanned] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (data !== null) {
      props.onBarCodeScanned(data)
    } else {
      props.onReset()
    }
  }, [data])

  const handleOnBarCodeScanned = (data: any) => {
    setData(data)
    setScanned(true)
    playSound(SOUNDS.SCAN_ACCEPT)
  }

  const rescan = () => {
    setScanned(false)
    setData(null)
  }

  return (
    <>
      <BarCodeScanner
        {...props}
        onBarCodeScanned={!scanned ? handleOnBarCodeScanned : null}
      />
      {scanned && (
        <>
          <View style={styles.qr}>
            <Text>{data.data}</Text>
          </View>

          <Button onPress={rescan} style={styles.button}>
            Quét Lại
          </Button>
        </>
      )}
    </>
  )
}

export interface ScannerProps {
  data?: any
  onBarCodeScanned?: (scannedData: any) => void
  isMounted: boolean
}

export const Scanner = (props: ScannerProps) => {
  const { getProps } = useBara({ kind: 'scanner', handlers })
  const { isMounted } = props
  const [hasCameraPermission, setHasCameraPermission] = useState(null)
  const getPermissionAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    setHasCameraPermission(status === 'granted')
  }

  useEffect(() => {
    getPermissionAsync()
  }, [])

  if (hasCameraPermission === null) {
    return <Text>Vui lòng cho phép sử dụng camera của điện thoại</Text>
  }

  if (hasCameraPermission === false) {
    return <Text>Không thể truy cập camera!</Text>
  }

  return (
    <View style={styles.container}>
      {isMounted && (
        <BarcodeScanner
          {...getProps(props)}
          style={StyleSheet.absoluteFillObject}
        />
      )}
    </View>
  )
}
