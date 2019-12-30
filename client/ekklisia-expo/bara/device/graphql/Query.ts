import gql from 'graphql-tag'

export const SEARCH_DEVICES = gql`
  query searchDevices($term: String!) {
    devices: searchDevices(term: $term) {
      id
      imei
      status {
        slug
        name
      }
      profile {
        id
        name
      }
      createdAt
    }
  }
`
