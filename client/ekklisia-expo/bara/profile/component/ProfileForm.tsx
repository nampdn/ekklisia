import React, { useCallback, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Layout,
  Input,
  Radio,
  RadioGroup,
  Text,
  Button,
} from '@ui-kitten/components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import useForm from 'react-hook-form'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    // minHeight: 600,
  },
  radio: {
    flexDirection: 'column',
    padding: 8,
    flex: 1,
  },
  genderText: {
    color: 'gray',
    fontWeight: '700',
  },
})

export interface ProfileInfoProps {
  initialName?: string
  onSubmit?: (data: any) => void
  requiredFields: string[]
}

export const ProfileForm = ({
  initialName,
  onSubmit = () => {},
  requiredFields = ['name'],
}: ProfileInfoProps) => {
  const { register, setValue, watch, handleSubmit, errors } = useForm()
  const gender = watch('gender')
  const faithType = watch('faithType')
  const marriage = watch('marriage')

  useEffect(() => {
    setValue('name', initialName, true)
  }, [initialName])

  const isFieldRequired = (field: string) => requiredFields.indexOf(field) > -1

  const submit = useCallback((data: any) => {
    const fieldMap = {
      gender: ['male', 'female'],
      faithType: ['believer', 'unknow'],
      marriage: ['alone', 'family'],
    }
    onSubmit({
      ...data,
      birth: parseInt(data.birth),
      gender: fieldMap.gender[data.gender - 1] || null,
      faithType: fieldMap.faithType[data.faithType - 1] || null,
      marriage: fieldMap.marriage[data.marriage - 1] || null,
    })
  }, [])

  return (
    <KeyboardAwareScrollView style={styles.container} enableOnAndroid={true}>
      <Layout level="3" style={styles.container}>
        <Input
          label="Họ tên"
          placeholder="Bắt buộc"
          status={errors.name ? 'danger' : 'success'}
          caption={errors.name ? 'Họ tên là thông tin cần thiết.' : ''}
          ref={
            register(
              { name: 'name' },
              { required: isFieldRequired('name') },
            ) as any
          }
          onChangeText={text => setValue('name', text, true)}
        />
        <Input
          label="Số điện thoại"
          placeholder={isFieldRequired('phoneNumber') ? 'Bắt buộc' : ''}
          status={errors.phoneNumber ? 'danger' : 'success'}
          caption={
            errors.phoneNumber ? 'Số điện thoại là thông tin cần thiết.' : ''
          }
          autoCompleteType="tel"
          dataDetectorTypes="phoneNumber"
          keyboardType="number-pad"
          ref={
            register(
              { name: 'phoneNumber' },
              { required: isFieldRequired('phoneNumber') },
            ) as any
          }
          onChangeText={text => setValue('phoneNumber', text, true)}
        />
        <Layout
          level="3"
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <Input
            label="Năm sinh"
            autoCompleteType="cc-exp-year"
            keyboardType="number-pad"
            style={{ flex: 1 }}
            ref={register({ name: 'birth' }) as any}
            onChangeText={text => setValue('birth', text, true)}
          />
          <View style={{ width: 10 }} />
          <Input
            label="Hội thánh"
            style={{ flex: 1 }}
            ref={register({ name: 'church' }) as any}
            onChangeText={text => setValue('church', text, true)}
          />
        </Layout>
        <Layout
          level="3"
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <RadioGroup
            style={styles.radio}
            selectedIndex={gender}
            onChange={gender => {
              setValue('gender', gender)
            }}
            ref={register({ name: 'gender' })}
          >
            <Text category="s2" style={styles.genderText}>
              Giới tính
            </Text>
            <Radio text="Nam" />
            <Radio text="Nữ" />
          </RadioGroup>
          <RadioGroup
            style={styles.radio}
            selectedIndex={faithType}
            onChange={faithType => {
              setValue('faithType', faithType)
            }}
            ref={register({ name: 'faithType' })}
          >
            <Text category="s2" style={styles.genderText}>
              Dành cho
            </Text>
            <Radio text="Tín hữu" />
            <Radio text="Thân hữu" />
          </RadioGroup>
          <RadioGroup
            style={styles.radio}
            selectedIndex={marriage}
            onChange={m => {
              setValue('marriage', m)
            }}
            ref={register({ name: 'marriage' })}
          >
            <Text category="s2" style={styles.genderText}>
              Hôn nhân
            </Text>
            <Radio text="Độc thân" />
            <Radio text="Có gia đình" />
          </RadioGroup>
        </Layout>
        <Button style={{ marginTop: 16 }} onPress={handleSubmit(submit)}>
          Đăng ký
        </Button>
      </Layout>
    </KeyboardAwareScrollView>
  )
}
