import gql from 'graphql-tag'

export const DYNAMIC_FACTORY_ACTION = gql`
  mutation dynamicFactoryAction(
    $imei: String!
    $profileId: String
    $note: String
    $actionSlug: String!
  ) {
    dynamicFactoryAction(
      imei: $imei
      profileId: $profileId
      note: $note
      actionSlug: $actionSlug
    ) {
      id
    }
  }
`
