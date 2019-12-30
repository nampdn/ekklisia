import React from 'react'
import { Card, CardHeader, List, ListItem, Text } from '@ui-kitten/components'
import moment from 'moment'

export interface DeviceTransactionProps {
  transactions: any[]
}

const Header = () => <CardHeader title="Lịch sử" />

export const DeviceTransaction = ({ transactions }: DeviceTransactionProps) => {
  const emptyItem = {
    action: {
      name: 'Không có hoạt động nào gần đây!',
    },
  }
  const renderTime = item => () => (
    <Text>
      {item && item.profile && item.profile.name ? item.profile.name : null}
    </Text>
  )
  const renderItem = ({ item, index }) => (
    <ListItem
      title={item.action.name}
      description={
        item.createAt
          ? moment(item.createAt)
              .local()
              .locale('vi')
              .fromNow()
          : null
      }
      accessory={renderTime(item)}
    />
  )
  return (
    <Card header={Header}>
      <List
        data={transactions.length > 0 ? transactions : [emptyItem]}
        renderItem={renderItem}
      />
    </Card>
  )
}
