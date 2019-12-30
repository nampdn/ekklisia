import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Avatar, Text, Layout, Toggle } from '@ui-kitten/components'

const styles = StyleSheet.create({
  memberItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    margin: 10,
  },
  text: {
    flex: 1,
    fontSize: 18,
  },
  toggle: {
    marginRight: 10,
  },
  checkView: {},
})

interface MemberItemProps {
  member: any
}

export const MemberItem = ({ member }: MemberItemProps) => {
  const [checked, setChecked] = useState(false)
  const switchCheck = () => {
    setChecked(!checked)
  }
  return (
    <Layout level="3" style={styles.memberItem}>
      <Avatar
        style={styles.avatar}
        size="large"
        source={{ uri: member.photoUrl }}
      />
      <Text style={styles.text} status="basic" category="s1" numberOfLines={1}>
        {member.name}
      </Text>
      <Toggle style={styles.toggle} checked={checked} onChange={switchCheck} />
    </Layout>
  )
}
