import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'

import moment from 'moment'
import 'moment/locale/vi'

const styles = StyleSheet.create({
  imei: {
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 2,
    paddingLeft: 16,
    paddingRight: 16,
    margin: 8,
    borderRadius: 24,
    width: '100%',
    borderWidth: 2,
    borderColor: 'green',
  },
  info: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 8,
  },
  status: {
    borderRadius: 16,
    paddingLeft: 8,
    paddingRight: 8,
  },
})

export interface DeviceInfoProps {
  status: string
  updatedAt: string
  imei: string
}

export const DeviceInfo = ({ status, updatedAt, imei }) => {
  return (
    <Layout level="1" style={styles.imei}>
      <Image
        style={{ width: 50 }}
        resizeMode="contain"
        source={require('../../../assets/wifiplayer.png')}
      />
      <Layout style={styles.info}>
        <Text category="h5">WIFI Player - SAB1901</Text>
        <Text category="s2">{imei}</Text>
        <Layout level="4" style={styles.status}>
          <Text category="s2">
            {status}
            {updatedAt !== ''
              ? ` (${moment(updatedAt)
                  .local()
                  .locale('vi')
                  .fromNow()})`
              : ''}
          </Text>
        </Layout>
      </Layout>
    </Layout>
  )
}
