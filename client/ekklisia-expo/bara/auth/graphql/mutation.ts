import gql from 'graphql-tag'

export const AUTH_FULL = gql`
  mutation authFull(
    $email: String!
    $name: String!
    $googleId: String!
    $photoUrl: String
    $googleToken: String!
    $phoneNumber: String!
  ) {
    authFull(
      email: $email
      name: $name
      photoUrl: $photoUrl
      googleId: $googleId
      googleToken: $googleToken
      phoneNumber: $phoneNumber
    ) {
      user {
        id
        email
        googleId
        googleToken
        profile {
          id
          name
          birth
          photoUrl
        }
      }
      token
    }
  }
`

// export const AUTH_APPLE = gql``
