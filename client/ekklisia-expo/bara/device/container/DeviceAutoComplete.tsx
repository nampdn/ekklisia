import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native'
import { Button, Modal, Layout, Input, Icon, Text } from '@ui-kitten/components'

import { useQuery } from '@apollo/react-hooks'
import { SEARCH_DEVICES } from '../graphql'

import { DeviceList } from '../component'
import { RagButton } from '../../../components'

const styles = StyleSheet.create({
  backdropStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  center: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: 300,
    height: 480,
    padding: 8,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  searchInput: {
    height: 30,
    flex: 1,
  },
  addPersonButton: {
    height: 30,
    marginRight: 8,
  },
})

const shortImei = (imei: string) => {
  const first = imei.slice(0, 6)
  const last = imei.slice(imei.length - 6, imei.length)
  return `${first}***${last}`
}

export interface DeviceAutoCompleteProps {
  style?: StyleProp<ViewStyle>
  name: string
  selectedDevice?: any
  onDeviceSelect: (id: string) => void
  onNewDevice: (name: string) => void
}

const CloseIcon = (style: any) => <Icon name="close-outline" {...style} />
const CameraIcon = (style: any) => <Icon name="camera-outline" {...style} />
const SmartPhoneIcon = (style: any) => (
  <Icon name="smartphone-outline" {...style} />
)

export const DeviceAutoComplete = ({
  name,
  selectedDevice,
  onDeviceSelect,
  onNewDevice,
  style,
}: DeviceAutoCompleteProps) => {
  const [selected, setSelected] = useState(null)
  const [filterText, setFilterText] = useState('')
  const { data, loading, refetch } = useQuery(SEARCH_DEVICES, {
    variables: { term: filterText },
  })
  const [devices, setDevices] = useState([])
  const [showModal, setShowModal] = useState(false)
  const filterTimer = useRef(null)

  useEffect(() => {
    setSelected(selectedDevice)
  }, [selectedDevice])

  const handleOnDeviceSelect = (device: any) => {
    setSelected(device)
    onDeviceSelect(device)
    setShowModal(false)
  }

  const updateFilter = (text: string) => {
    refetch({ term: text })
  }

  const changeFilterText = (text: string) => {
    setFilterText(text)
  }

  const clearSearch = () => {
    setFilterText('')
    setDevices([])
  }

  const newDevice = () => {
    setShowModal(false)
    onNewDevice(filterText)
  }

  useEffect(() => {
    if (filterText === '') {
      setDevices([])
    }
    if (filterText.length < 4) return
    clearTimeout(filterTimer.current)
    filterTimer.current = setTimeout(() => {
      updateFilter(filterText)
    }, 700)
    return () => {
      clearTimeout(filterTimer.current)
    }
  }, [filterText])

  useEffect(() => {
    if (data && data.devices && data.devices.length > 0) {
      const devicesWithText = data.devices.map(p => ({ ...p, text: p.name }))
      setDevices(devicesWithText)
    }
  }, [data])

  const NoDeviceFound = () => (
    <Layout level="4" style={styles.center}>
      <Text>Tên này dường như chưa tồn tại...</Text>
      <Button style={{ margin: 8 }} onPress={newDevice}>
        Thêm một người mới!
      </Button>
    </Layout>
  )

  const Hint = () => (
    <Layout level="4" style={styles.center}>
      <Text category="p2">
        Bấm nút scan phía trên để chọn thiết bị bằng mã QR nhanh hơn
      </Text>
    </Layout>
  )

  const renderModal = () => (
    <Layout level="4" style={styles.form}>
      <View style={styles.searchBar}>
        <Button
          icon={CameraIcon}
          style={styles.addPersonButton}
          onPress={newDevice}
        />
        <Input
          style={styles.searchInput}
          value={filterText}
          icon={CloseIcon}
          placeholder="Nhập imei tìm kiếm"
          onChangeText={changeFilterText}
          onIconPress={clearSearch}
        />
      </View>
      {devices.length === 0 && filterText.length > 0 && !loading && (
        <NoDeviceFound />
      )}
      {devices.length === 0 && filterText.length === 0 && <Hint />}
      <DeviceList
        loading={loading}
        data={devices}
        onDeviceSelect={handleOnDeviceSelect}
      />
    </Layout>
  )

  return (
    <View style={style}>
      <RagButton
        icon={SmartPhoneIcon}
        appearance="outline"
        onPress={() => setShowModal(true)}
      >
        {selected === null
          ? 'Chọn ' + name
          : `${name}: ${shortImei(selected.imei)}`}
      </RagButton>
      <Modal
        allowBackdrop={true}
        backdropStyle={styles.backdropStyle}
        onBackdropPress={() => {
          setShowModal(false)
        }}
        visible={showModal}
      >
        {renderModal()}
      </Modal>
    </View>
  )
}
