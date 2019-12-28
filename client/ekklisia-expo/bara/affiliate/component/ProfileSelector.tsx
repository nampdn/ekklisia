import React from 'react'
import { Layout } from '@ui-kitten/components'

import { ProfileList } from '../../profile'

export interface ProfileSelectorProps {
  data: any[]
}

export const ProfileSelector = (props: ProfileSelectorProps) => {
  return (
    <Layout level="2">
      <ProfileList data={props.data} />
    </Layout>
  )
}
