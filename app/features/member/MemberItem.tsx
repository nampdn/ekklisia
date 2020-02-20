import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Avatar, Text, Layout } from '@ui-kitten/components'
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
    fontSize: 14,
  },
  toggle: {
    marginRight: 10,
  },
  toggleAnimation: {
    width: 6 * unit,
    height: 6 * unit,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkView: {},
  disabled: {
    opacity: 0.8,
    backgroundColor: '#cecece',
  },
})

interface MemberItemProps {
  member: any
  disabled?: boolean
  checked?: boolean
  index?: number
  onCheck?: (state: boolean) => void
}

export const MemberItem = ({
  member,
  index,
  disabled = true,
  checked,
  onCheck,
}: MemberItemProps) => {
  const [isChecked, setIsChecked] = useState(checked || false)

  const switchCheck = () => {
    setIsChecked(!isChecked)
    onCheck && onCheck(!isChecked)
  }

  const buildAvatarUrl = (id, fid) =>
    fid
      ? `http://graph.facebook.com/v6.0/${fid}/picture`
      : `https://api.adorable.io/avatars/285/${id}.png`

  useEffect(() => {
    if (checked !== isChecked) {
      setIsChecked(checked)
    }
  }, [checked])

  return (
    <TouchableOpacity disabled={disabled} onPress={switchCheck}>
      <Layout
        level="3"
        style={[styles.memberItem, disabled && styles.disabled]}
      >
        <Avatar
          style={styles.avatar}
          size="small"
          source={{ uri: buildAvatarUrl(member.id, member.facebookId) }}
        />
        <Text
          style={styles.text}
          status="basic"
          category="s1"
          numberOfLines={1}
        >
          {index >= 0 ? `${index + 1}. ` : ''}
          {member.fullName}
        </Text>
        <View style={styles.toggleAnimation}>
          <Lottie
            direction={isChecked ? 1 : -1}
            style={{
              position: 'absolute',
              width: 10 * unit,
              height: 10 * unit,
              right: -2 * unit,
            }}
            options={{
              loop: false,
              animationData: animation,
            }}
          />
        </View>
      </Layout>
    </TouchableOpacity>
  )
}
