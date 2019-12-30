import React from 'react'
import { StyleSheet } from 'react-native'
import { Input, Card, Button } from '@ui-kitten/components'
import useForm from 'react-hook-form'

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    minWidth: 300,
  },
  button: {},
})

export interface PhoneFormData {
  phoneNumber: string
}

export interface PhoneFormProps {
  onSubmit?: (formData: any) => void
}

export const PhoneForm = (props: PhoneFormProps) => {
  const { register, handleSubmit, setValue, errors } = useForm()

  return (
    <Card style={styles.card}>
      <Input
        ref={register({ name: 'phoneNumber' })}
        style={styles.button}
        placeholder="Số điện thoại"
        autoCompleteType="tel"
        dataDetectorTypes="phoneNumber"
        keyboardType="number-pad"
        onChangeText={text => setValue('phoneNumber', text + '', true)}
      />
      <Button onPress={handleSubmit(props.onSubmit)}>Xác Thực</Button>
    </Card>
  )
}
