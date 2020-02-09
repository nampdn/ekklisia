import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Avatar, Text, Layout, CheckBox } from '@ui-kitten/components'

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
  const buildAvatarUrl = (id, fid) =>
    fid
      ? `http://graph.facebook.com/${fid}/picture?type=square`
      : `https://api.adorable.io/avatars/285/${id}.png`
  return (
    <TouchableOpacity onPress={switchCheck}>
      <Layout level="3" style={styles.memberItem}>
        <Avatar
          style={styles.avatar}
          size="large"
          source={{ uri: buildAvatarUrl(member.id, member.facebookId) }}
        />
        <Text
          style={styles.text}
          status="basic"
          category="s1"
          numberOfLines={1}
        >
          {member.fullName}
        </Text>
        <CheckBox
          style={styles.toggle}
          checked={checked}
          onChange={switchCheck}
        />
      </Layout>
    </TouchableOpacity>
  )
}
