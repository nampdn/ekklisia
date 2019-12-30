import React, { useState } from 'react'
import { SafeAreaView, Platform, StyleSheet } from 'react-native'
import {
  Icon,
  Layout,
  Tab,
  TabView,
  TopNavigation,
  TopNavigationAction,
  Text,
  Spinner,
} from '@ui-kitten/components'

import { useQuery } from '@apollo/react-hooks'
import { GET_PROFILES } from '../../profile'

import { AffiliateForm, ProfileSelector } from '../component'

const styles = StyleSheet.create({
  container: {},
  profileList: {
    paddingBottom: 24,
    marginBottom: 64,
  },
  droidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  tabContainer: {},
})

const BackIcon = style => <Icon {...style} name="arrow-back" />
const PeopleIcon = style => <Icon {...style} name="people-outline" />
const AddIcon = style => <Icon {...style} name="person-add-outline" />

export const AffiliateScreen = ({ navigation }) => {
  const {
    data: profiles,
    loading: loadingProfile,
    error: profilesError,
  } = useQuery(GET_PROFILES)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const goBack = () => {
    navigation.goBack()
  }

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={goBack} />
  )

  const setTab = (index: number) => {
    setTimeout(() => {
      setSelectedIndex(index)
    }, 100)
  }

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <TopNavigation
        title="Đăng Ký"
        alignment="start"
        leftControl={BackAction()}
      />
      <Layout level="3" style={{ flex: 1, padding: 16 }}>
        <Text category="h5" style={{ marginBottom: 16 }}>
          Chọn người giới thiệu
        </Text>
        <TabView selectedIndex={selectedIndex} onSelect={setTab}>
          <Tab title="Danh sách" icon={PeopleIcon}>
            <Layout level="3" style={styles.profileList}>
              {loadingProfile && <Spinner size="giant" />}
              {profiles && <ProfileSelector data={profiles.profiles} />}
            </Layout>
          </Tab>
          <Tab title="Tạo mới" icon={AddIcon}>
            <Layout level="3" style={styles.tabContainer}>
              <AffiliateForm />
            </Layout>
          </Tab>
        </TabView>
      </Layout>
    </SafeAreaView>
  )
}
