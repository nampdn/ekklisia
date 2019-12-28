import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, Layout } from '@ui-kitten/components'

import { ProfileForm } from '../../register'

const styles = StyleSheet.create({
  container: {},
})

export const AffiliateForm = () => {
  return <ProfileForm requiredFields={['name', 'phoneNumber']} />
}
