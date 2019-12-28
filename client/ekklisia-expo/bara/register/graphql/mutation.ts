import gql from 'graphql-tag'

export const AFFILIATE = gql`
  mutation affiliate(
    $referrerId: String!
    $refereeId: String!
    $deviceId: String!
  ) {
    affiliate(
      referrerId: $referrerId
      refereeId: $refereeId
      deviceId: $deviceId
    ) {
      id
    }
  }
`

export const NEW_PROFILE = gql`
  mutation newProfile(
    $name: String!
    $address: String
    $birth: Int
    $phoneNumber: String
    $gender: String
    $faithType: String
    $marriage: String
    $church: String
    $isOrg: Boolean
  ) {
    newProfile(
      name: $name
      address: $address
      birth: $birth
      phoneNumber: $phoneNumber
      gender: $gender
      faithType: $faithType
      marriage: $marriage
      church: $church
      isOrg: $isOrg
    ) {
      id
    }
  }
`

export const ASSIGN_PROFILE_TO_DEVICE = gql`
  mutation assignProfileToDevice(
    $imei: String!
    $profileId: String!
    $note: String
  ) {
    assignProfileToDevice(imei: $imei, profileId: $profileId, note: $note) {
      id
    }
  }
`
