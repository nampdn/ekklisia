import React, { useEffect, useRef } from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Modal, Text, Spinner } from '@ui-kitten/components'

export const LoadingView = ({ show, text }: any) => {
  const [visible, setVisible] = React.useState(show)
  const delay = useRef(null)

  useEffect(() => {
    if (show !== visible && !show && delay.current) {
      clearTimeout(delay.current)
    }
    delay.current = setTimeout(() => {
      setVisible(show)
      clearTimeout(delay.current)
    }, 500)
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
