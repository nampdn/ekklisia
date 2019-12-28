import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Layout,
  List,
  ListItem,
  Avatar,
  Icon,
  Text,
  CheckBox,
} from '@ui-kitten/components'

import { PhoneMask } from './PhoneMask'
import { Loading } from '../../../components'

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
  },
  listItemMain: {
    flexDirection: 'column',
  },
  listItemAvatar: {
    marginRight: 8,
  },
})

export interface ProfileListItemProps {
  item: any
  index: number
  onSelected: any
}

const PersonAvatar = ({ photoUrl }: any) => {
  return photoUrl !== null && photoUrl.length > 0 ? (
    <Avatar size="small" source={{ uri: photoUrl }} />
  ) : (
    <Icon size="small" width={28} height={28} name="person-outline" />
  )
}

const MoreInfo = ({ text }: any) => (text ? <Text>({text})</Text> : null)

export interface ProfileListProps {
  loading: Boolean
  data: any[]
  onProfileSelect?: (profile: any) => void
}

export const ProfileList = (props: ProfileListProps) => {
  const { onProfileSelect, loading } = props
  const [checked, setChecked] = React.useState(null)

  const onCheckBoxCheckedChange = index => {
    setChecked(index)
    if (onProfileSelect) {
      onProfileSelect(props.data[index])
    }
  }

  const renderAccessory = (style, index) => (
    <CheckBox
      style={style}
      checked={checked}
      onChange={() => onCheckBoxCheckedChange(index)}
    />
  )

  const renderListItem = ({ item, index }) => {
    return (
      <ListItem
        style={styles.listItemContainer}
        accessory={renderAccessory}
        onPress={() => onCheckBoxCheckedChange(index)}
      >
        <View style={styles.listItemAvatar}>
          <PersonAvatar photoUrl={item.photoUrl} />
        </View>
        <View style={styles.listItemMain}>
          <Text category="label">
            {item.name} <MoreInfo text={item.birth} />
          </Text>
          <Text category="c1">
            {item.church || item.slug}{' '}
            <PhoneMask phoneNumber={item.phoneNumber} />
          </Text>
        </View>
      </ListItem>
    )
  }

  return (
    <Layout style={{ flex: 1, backgroundColor: 'transparent' }}>
      <Loading isLoading={loading} />
      <List
        style={{ backgroundColor: 'transparent' }}
        data={props.data}
        renderItem={renderListItem}
      />
    </Layout>
  )
}
