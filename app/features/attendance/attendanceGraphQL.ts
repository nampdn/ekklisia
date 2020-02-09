import gql from 'graphql-tag'

export const MEMBERS_IN_GROUP = gql`
  query {
    membersInGroup {
      id
      fullName
      facebookId
    }
  }
`
