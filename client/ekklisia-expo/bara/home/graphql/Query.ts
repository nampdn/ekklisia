import gql from 'graphql-tag'

export const GET_PROFILE = gql`
  query getProfile($profileId: ID!) {
    profile(where: { id: $profileId }) {
      id
      name
      photoUrl
      church
      birth
    }
  }
`

export const GET_FACTORY_ACTIONS = gql`
  {
    factoryActions {
      id
      slug
      text: name
      disabled
      needProfile
      role {
        code
        name
      }
    }
  }
`
