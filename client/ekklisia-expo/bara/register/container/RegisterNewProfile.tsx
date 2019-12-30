import React from 'react'
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import {
  Divider,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components'

import { useMutation } from '@apollo/react-hooks'
import { NEW_PROFILE } from '../graphql'
import { ProfileForm } from '../../profile'
import { Loading } from '../../../components'

const BackIcon = style => <Icon {...style} name="arrow-back" />

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

export const RegisterNewProfile = ({ navigation }) => {
  const name = navigation.getParam('name', '')
  const [createProfile, { loading: creatingProfile }] = useMutation(NEW_PROFILE)

  const submit = async profileData => {
    const result = await createProfile({ variables: profileData })
    console.log(`Created profile: ${result}`)
    goBack()
  }

  const goBack = () => {
    navigation.goBack()
  }

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={goBack} />
  )

  return (
    <SafeAreaView style={[styles.container, styles.droidSafeArea]}>
      <TopNavigation
        title="Tạo người dùng"
        alignment="start"
        leftControl={BackAction()}
      />
      <Divider />
      <Layout level="3" style={{ flex: 1, padding: 8 }}>
        {!creatingProfile && (
          <ProfileForm
            initialName={name}
            requiredFields={['name']}
            onSubmit={submit}
          />
        )}
        <Loading isLoading={creatingProfile} />
      </Layout>
    </SafeAreaView>
  )
}
