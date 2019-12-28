import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Layout, List, ListItem, Text, CheckBox } from '@ui-kitten/components'
import moment from 'moment'

import { Loading, MoreInfo } from '../../../components'

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

export interface DeviceListItemProps {
  item: any
  index: number
  onSelected: any
}

export interface DeviceListProps {
  loading: Boolean
  data: any[]
  onDeviceSelect?: (profile: any) => void
}

export const DeviceList = (props: DeviceListProps) => {
  const { onDeviceSelect, loading } = props
  const [checked, setChecked] = React.useState(null)

  const onCheckBoxCheckedChange = index => {
    setChecked(index)
    if (onDeviceSelect) {
      onDeviceSelect(props.data[index])
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
        <View style={styles.listItemMain}>
          <Text category="label">{item.imei}</Text>
          <Text category="c1">
            <MoreInfo
              label="Hồ sơ"
              content={item.profile ? item.profile.name : ''}
            />
            <MoreInfo
              label="Trạng thái"
              content={item.status ? item.status.name : 'chưa đụng tới'}
            />
            <MoreInfo
              label="Nhập kho"
              content={
                item.createdAt !== ''
                  ? `${moment(item.createdAt)
                      .local()
                      .locale('vi')
                      .fromNow()}`
                  : ''
              }
            />
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
