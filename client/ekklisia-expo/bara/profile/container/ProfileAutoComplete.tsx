import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native'
import { Button, Modal, Layout, Input, Icon, Text } from '@ui-kitten/components'

import { useQuery } from '@apollo/react-hooks'
import { SEARCH_PROFILES } from '../graphql'

import { ProfileList } from '../component'

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

export interface ProfileAutoCompleteProps {
  name: string
  style?: StyleProp<ViewStyle>
  selectedProfile?: any
  onProfileSelect: (id: string) => void
  onNewProfile: (name: string) => void
}

const CloseIcon = (style: any) => <Icon name="close-outline" {...style} />
const PersonAddIcon = (style: any) => (
  <Icon name="person-add-outline" {...style} />
)

export const ProfileAutoComplete = ({
  name,
  style,
  selectedProfile,
  onProfileSelect,
  onNewProfile,
}: ProfileAutoCompleteProps) => {
  const [selected, setSelected] = useState(null)
  const [filterText, setFilterText] = useState('')
  const { data, loading, refetch } = useQuery(SEARCH_PROFILES, {
    variables: { term: filterText },
  })
  const [profiles, setProfiles] = useState([])
  const [showModal, setShowModal] = useState(false)
  const filterTimer = useRef(null)

  useEffect(() => {
    if (selectedProfile !== null) {
      setSelected(selectedProfile)
    }
  }, [selectedProfile])

  const handleOnProfileSelect = (profile: any) => {
    setSelected(profile)
    onProfileSelect(profile)
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
    setProfiles([])
  }

  const newProfile = () => {
    setShowModal(false)
    onNewProfile(filterText)
  }

  useEffect(() => {
    if (filterText === '') {
      setProfiles([])
    }
    clearTimeout(filterTimer.current)
    filterTimer.current = setTimeout(() => {
      updateFilter(filterText)
    }, 700)
    return () => {
      clearTimeout(filterTimer.current)
    }
  }, [filterText])

  useEffect(() => {
    if (data && data.profiles && data.profiles.length > 0) {
      const profilesWithText = data.profiles.map(p => ({ ...p, text: p.name }))
      setProfiles(profilesWithText)
    }
  }, [data])

  const NoProfileFound = () => (
    <Layout level="4" style={styles.center}>
      <Text>Tên này dường như chưa tồn tại...</Text>
      <Button style={{ margin: 8 }} onPress={newProfile}>
        Thêm một người mới!
      </Button>
    </Layout>
  )

  const Hint = () => (
    <Layout level="4" style={styles.center}>
      <Text category="p2">
        Vui lòng tìm kiếm trước khi tạo người dùng mới để tránh lặp lại nhiều hồ
        sơ trên cùng một người.
      </Text>
    </Layout>
  )

  const renderModal = () => (
    <Layout level="4" style={styles.form}>
      <View style={styles.searchBar}>
        <Button
          icon={PersonAddIcon}
          style={styles.addPersonButton}
          onPress={newProfile}
        />
        <Input
          style={styles.searchInput}
          value={filterText}
          icon={CloseIcon}
          placeholder="Tìm họ và tên"
          onChangeText={changeFilterText}
          onIconPress={clearSearch}
        />
      </View>
      {profiles.length === 0 && filterText.length > 0 && !loading && (
        <NoProfileFound />
      )}
      {profiles.length === 0 && filterText.length === 0 && <Hint />}
      <ProfileList
        loading={loading}
        data={profiles}
        onProfileSelect={handleOnProfileSelect}
      />
    </Layout>
  )

  return (
    <View style={style}>
      <Button onPress={() => setShowModal(true)}>
        {selected === null ? 'Chọn ' + name : `${name}: ${selected.name}`}
      </Button>
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
