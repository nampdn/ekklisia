import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Layout, Modal, Text, Spinner } from '@ui-kitten/components'

export const LoadingView = ({ show, text }: any) => {
  const [visible, setVisible] = React.useState(show)

  useEffect(() => {
    setVisible(show)
  }, [show])

  const renderModalElement = () => (
    <Layout level="3" style={styles.modalContainer}>
      <Spinner size="giant" />
      {text && <Text>{text}</Text>}
    </Layout>
  )

  return (
    <Modal backdropStyle={styles.backdrop} visible={visible}>
      {renderModalElement()}
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 256,
    padding: 16,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 256,
    padding: 16,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})
