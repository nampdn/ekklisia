import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, Platform, View } from 'react-native'
import {
  Divider,
  Icon,
  Layout,
  Input,
  Button,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components'

import { useMutation, useQuery } from '@apollo/react-hooks'
import { DYNAMIC_FACTORY_ACTION } from '../graphql'

import { useSelector, useDispatch } from 'react-redux'
import { selectScanningData } from '../../scanner/model'
import { Dispatch } from '../../rematch'

import { ProfileAutoComplete } from '../../profile'
import { DeviceAutoComplete, DeviceInfo } from '../../device'
import { ConfirmSlider } from '../component'
import { Loading, ErrorBox, RagButton, SuccessBox } from '../../../components'
import { ScrollView } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deviceInputGroup: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16,
  },
  deviceInput: {},
  layout: {
    flex: 1,
    padding: 16,
  },
  droidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  button: {
    marginBottom: 16,
  },
  confirmSlider: {
    margin: 24,
  },
})

const BackIcon = style => <Icon {...style} name="arrow-back" />
const CameraIcon = style => <Icon {...style} name="camera-outline" />

export const FactoryScreen = ({ navigation }) => {
  const [imei, setImei] = useState(null)
  const [note, setNote] = useState(null)
  const [isDone, setIsDone] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [selectedDevice, setSelectedDevice] = useState(null)
  const [confirmable, setConfirmable] = useState(false)

  const action = navigation.getParam('action')
  const scanningData = useSelector(selectScanningData)
  const dispatch = useDispatch<Dispatch>()

  const [dynamicFactoryAction, { loading, data, error }] = useMutation(
    DYNAMIC_FACTORY_ACTION,
    {
      onCompleted: () => {
        setIsDone(true)
      },
    },
  )

  const goBack = () => {
    navigation.goBack()
  }

  const goToNewProfile = (name: string) => {
    navigation.navigate('RegisterNewProfile', { name })
  }

  const openScanner = () => {
    navigation.navigate('Scanner', { from: `factory::${action.slug}` })
  }

  const resumeForm = () => {
    setImei(null)
    setSelectedDevice(null)
    setIsDone(false)
  }

  const handleConfirmation = () => {
    dynamicFactoryAction({
      variables: {
        imei,
        note,
        actionSlug: action.slug,
        profileId: selectedProfile ? selectedProfile.id : null,
      },
    })
  }

  useEffect(() => {
    let flag = true
    flag = flag && selectedDevice !== null
    flag = action.needProfile ? flag && selectedProfile !== null : flag
    setConfirmable(!flag)
  }, [selectedProfile, selectedDevice, action])

  useEffect(() => {
    if (scanningData) {
      if (scanningData.from === `factory::${action.slug}`) {
        setImei(scanningData.data)
        if (selectedDevice === null) {
          setSelectedDevice({ imei: scanningData.data })
        }
        dispatch.scanner.scannerReset()
      }
    } else if (selectedDevice !== null) {
      setImei(selectedDevice.imei)
    }
  }, [scanningData, selectedDevice])

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={goBack} />
  )

  return (
    <SafeAreaView style={[styles.container, styles.droidSafeArea]}>
      <TopNavigation
        title={action.text}
        alignment="start"
        leftControl={BackAction()}
      />
      <Divider />

      <Layout level="1" style={styles.layout}>
        {selectedDevice !== null && (
          <DeviceInfo
            status={selectedDevice.status}
            imei={selectedDevice.imei}
            updatedAt={selectedDevice.updatedAt}
          />
        )}
        <View style={styles.deviceInputGroup}>
          <RagButton icon={CameraIcon} onPress={openScanner} />
          <DeviceAutoComplete
            name="Thiết bị"
            style={{ flex: 1, marginLeft: 8 }}
            selectedDevice={selectedDevice}
            onDeviceSelect={setSelectedDevice}
            onNewDevice={openScanner}
          />
        </View>
        {action && action.needProfile && (
          <ProfileAutoComplete
            name="Hồ sơ"
            style={styles.button}
            selectedProfile={selectedProfile}
            onProfileSelect={setSelectedProfile}
            onNewProfile={goToNewProfile}
          />
        )}
        <Input
          placeholder="Ghi chú thêm (nếu có)"
          label="Ghi chú"
          value={note}
          onChangeText={setNote}
        />
        <View style={styles.confirmSlider}>
          <Loading isLoading={loading} />
          {!loading && !isDone && (
            <ConfirmSlider
              disabled={confirmable}
              title={`${action.text}`}
              onConfirm={handleConfirmation}
            />
          )}
          {isDone && (
            <Button onPress={resumeForm} status="success">
              Tiếp Tục
            </Button>
          )}
        </View>
        <ScrollView>
          <ErrorBox error={error} />
          <SuccessBox
            content={
              isDone ? `${action.text} cho thiết bị ${imei} thành công!` : null
            }
          />
        </ScrollView>
      </Layout>
    </SafeAreaView>
  )
}
