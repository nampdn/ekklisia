import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  ScrollView,
  Platform,
  StyleSheet,
} from 'react-native'
import {
  Layout,
  TopNavigation,
  Icon,
  TopNavigationAction,
  Spinner,
  TabView,
  Tab,
  Button,
} from '@ui-kitten/components'

import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_DEVICE, ASSIGN_PROFILE_TO_DEVICE, AFFILIATE } from '../graphql'

import { ProfileAutoComplete } from '../../profile'
import { DeviceInfo, DeviceTransaction } from '../../device'
import { Loading } from '../../../components'

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  profileSelectButton: {
    marginTop: 16,
  },
  transaction: {
    marginTop: 16,
  },
  tabView: {
    marginTop: 16,
  },
})

const BackIcon = (style: any) => (
  <Icon animation="pulse" {...style} name="arrow-back" />
)

const DirectIcon = (style: any) => (
  <Icon {...style} name="arrow-ios-forward-outline" />
)

const NonDirectIcon = (style: any) => (
  <Icon {...style} name="arrowhead-right-outline" />
)

export const RegisterScreen = ({ navigation }) => {
  // UI STATES
  const [isActivated, setIsActivated] = useState(false)
  const [canActive, setCanActive] = useState(false)
  const [selectedTab, setSelectedTab] = useState(0)

  const [lastTransaction, setLastTransaction] = useState(null)
  const imei = navigation.getParam('imei', null)
  const [referer, setReferer] = useState(null)
  const [referee, setReferee] = useState(null)
  const [directProfile, setDirectProfile] = useState(null)

  // GRAPHQL QUERY & MUTATIONS
  const { loading, data: device, refetch: refetchDevice } = useQuery(
    GET_DEVICE,
    {
      variables: { imei },
      fetchPolicy: 'network-only',
    },
  )

  const [
    assignProfileToDevice,
    { loading: assigningProfileToDevice },
  ] = useMutation(ASSIGN_PROFILE_TO_DEVICE)
  const [affiliate, { loading: affliateLoading }] = useMutation(AFFILIATE)

  const goBack = () => {
    navigation.goBack()
  }

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={goBack} />
  )

  const goToNewProfile = (name: string) => {
    navigation.navigate('RegisterNewProfile', { name })
  }

  const smoothTabSwitch = (index: number) => {
    setTimeout(() => {
      setSelectedTab(index)
    }, 50)
  }

  useEffect(() => {
    if (selectedTab === 0) {
      if (directProfile !== null) {
        setCanActive(true)
      } else {
        setCanActive(false)
      }
    } else {
      if (referer !== null && referee !== null) {
        setCanActive(true)
      } else {
        setCanActive(false)
      }
    }
  }, [selectedTab, referer, referee, directProfile])

  useEffect(() => {
    if (!loading && device) {
      if (
        device.device &&
        device.device.transactions &&
        device.device.transactions.length > 0
      ) {
        setLastTransaction(device.device.transactions[0])
        const activateTransactionIndex = device.device.transactions.findIndex(
          (t: any) => t.action.slug === 'activate',
        )
        setIsActivated(activateTransactionIndex > -1)
      } else {
        setIsActivated(false)
      }
    }
  }, [loading, device])

  const submitDirect = async () => {
    if (directProfile && directProfile.id) {
      await assignProfileToDevice({
        variables: {
          imei,
          profileId: directProfile.id,
          note: 'VGM-STATION',
        },
      })
      alert(`Đăng ký cho ${directProfile.name} hoàn tất!`)
      setIsActivated(true)
      refetchDevice({ imei })
    } else {
      alert('Có lỗi xảy ra, vui lòng về màn hình chính và thao tác lại.')
    }
  }

  const submitAffiliate = async () => {
    if (referer.id && referee.id && device.device.id) {
      await affiliate({
        variables: {
          referrerId: referer.id,
          refereeId: referee.id,
          deviceId: device.device.id,
        },
      })
      await assignProfileToDevice({
        variables: {
          imei,
          profileId: referee.id,
          note: 'VGM-STATION-AFFILIATE',
        },
      })
      alert(`Kích hoạt cho ${referee.name} thành công!`)
      setIsActivated(true)
      refetchDevice({ imei })
    } else {
      alert('Chưa đủ điều kiện!')
    }
  }

  const renderGoHome = () => (
    <Button
      style={{ marginTop: 16 }}
      onPress={() => navigation.navigate('Home')}
    >
      Về màn hình chính
    </Button>
  )

  const renderDeviceTransaction = (transactions: any[]) => (
    <View style={styles.transaction}>
      <DeviceTransaction transactions={transactions} />
    </View>
  )

  const renderDeviceInfo = () => (
    <DeviceInfo
      imei={device.device.imei}
      status={
        lastTransaction ? 'Đã ' + lastTransaction.action.name : 'Chưa xuất kho'
      }
      updatedAt={lastTransaction ? lastTransaction.createAt : ''}
    />
  )

  const renderDirectRegister = () => {
    return (
      <Layout level="3">
        <View style={styles.profileSelectButton}>
          <ProfileAutoComplete
            name="Người nhận máy"
            selectedProfile={directProfile}
            onProfileSelect={p => {
              setDirectProfile(p)
            }}
            onNewProfile={goToNewProfile}
          />
        </View>
        <View style={styles.profileSelectButton}>
          {(affliateLoading || assigningProfileToDevice) && (
            <Spinner size="large" />
          )}
          {!assigningProfileToDevice && (
            <Button onPress={submitDirect} disabled={!canActive}>
              Kích Hoạt
            </Button>
          )}
        </View>
      </Layout>
    )
  }

  const renderRefferalRegister = () => {
    return (
      <Layout level="3">
        <View style={styles.profileSelectButton}>
          <ProfileAutoComplete
            name="Người giới thiệu"
            selectedProfile={referer}
            onNewProfile={goToNewProfile}
            onProfileSelect={p => {
              setReferer(p)
            }}
          />
        </View>
        <View style={styles.profileSelectButton}>
          <ProfileAutoComplete
            name="Người nhận máy"
            selectedProfile={referee}
            onNewProfile={goToNewProfile}
            onProfileSelect={p => {
              setReferee(p)
            }}
          />
        </View>
        <View style={styles.profileSelectButton}>
          {(affliateLoading || assigningProfileToDevice) && (
            <Spinner size="large" />
          )}
          {!(affliateLoading || assigningProfileToDevice) && (
            <Button onPress={submitAffiliate} disabled={!canActive}>
              Kích Hoạt
            </Button>
          )}
        </View>
      </Layout>
    )
  }

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <TopNavigation
        title="Đăng Ký Thiết Bị"
        alignment="start"
        leftControl={BackAction()}
      />
      {loading || assigningProfileToDevice ? (
        <Loading isLoading={true} />
      ) : (
        <ScrollView>
          <Layout level="3" style={{ flex: 1, padding: 16 }}>
            {renderDeviceInfo()}
            {renderDeviceTransaction(device.device.transactions)}
            {isActivated ? (
              renderGoHome()
            ) : (
              <TabView
                style={styles.tabView}
                selectedIndex={selectedTab}
                onSelect={smoothTabSwitch}
              >
                <Tab title="Trực Tiếp" icon={DirectIcon}>
                  {renderDirectRegister()}
                </Tab>
                <Tab title="Gián Tiếp" icon={NonDirectIcon}>
                  {renderRefferalRegister()}
                </Tab>
              </TabView>
            )}
          </Layout>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}
