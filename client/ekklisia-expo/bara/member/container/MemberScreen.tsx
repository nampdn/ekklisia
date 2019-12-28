import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Text, Layout, Toggle, List } from '@ui-kitten/components'
import { memberList } from '../data/mock'

import { MemberItem } from '../component/MemberItem'
import { MemberList } from '../component/MemberList'

const styles = StyleSheet.create({})

export const MemberScreen = () => {
  return (
    <View style={{ marginTop: 24 }}>
      <MemberList data={memberList} />
    </View>
  )
}
