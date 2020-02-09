import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Avatar, Text, Layout, CheckBox } from '@ui-kitten/components'
import Lottie from 'lottie-react-web'

import animation from '../../assets/check-icon.json'
import { unit } from '../styles'

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
  toggleAnimation: {
    width: 14 * unit,
    height: 14 * unit,
  },
  checkView: {},
})

interface MemberItemProps {
  member: any
  index?: number
}

export const MemberItem = ({ member, index }: MemberItemProps) => {
  const [checked, setChecked] = useState(false)
  const switchCheck = () => {
    setChecked(!checked)
  }
  const buildAvatarUrl = (id, fid) =>
    fid
      ? `http://graph.facebook.com/v6.0/${fid}/picture`
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
          {index ? `${index}. ` : ''}
          {member.fullName}
        </Text>
        {/* <View style={styles.toggleAnimation}> */}
        <Lottie
          direction={checked ? 1 : -1}
          style={{
            position: 'absolute',
            width: 12 * unit,
            height: 12 * unit,
            right: -2 * unit,
          }}
          options={{
            loop: false,
            animationData: animation,
          }}
        />
        {/* </View> */}
      </Layout>
    </TouchableOpacity>
  )
}
