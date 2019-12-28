import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Select, Button } from '@ui-kitten/components'

import { useQuery } from '@apollo/react-hooks'
import { GET_FACTORY_ACTIONS, FactoryAction } from '../graphql'

import { Loading } from '../../../components'

const styles = StyleSheet.create({
  container: {},
  select: {
    marginBottom: 16,
  },
})

const NOT_IN_MANAGER = ['activate', 'affiliate'] // TODO move this to cloud remote config

export interface ManagerActionsProps {
  userRole?: any[]
  onAction?: (action: FactoryAction) => void
}

export const ManagerActions = (props: ManagerActionsProps) => {
  const [selectedAction, setSelectedAction] = useState(null)
  const [factoryActions, setFactoryActions] = useState([])
  const { data, loading } = useQuery(GET_FACTORY_ACTIONS)

  const handleSelectAction = (option: any) => {
    setSelectedAction(option)
  }

  const handleSubmitAction = () => {
    props.onAction && props.onAction(selectedAction)
  }

  useEffect(() => {
    if (!loading && data) {
      const fa = data.factoryActions.filter(
        (f: any) => NOT_IN_MANAGER.indexOf(f.slug) < 0 && !f.disabled,
      )
      setFactoryActions(fa)
    }
  }, [data, loading])

  return (
    <Layout>
      <Loading isLoading={loading} />
      <Select
        style={styles.select}
        placeholder="Chọn hành động"
        data={factoryActions}
        selectedOption={selectedAction}
        onSelect={handleSelectAction}
      />
      <Button
        status="danger"
        disabled={selectedAction === null}
        onPress={handleSubmitAction}
      >
        Bắt Đầu
      </Button>
    </Layout>
  )
}
