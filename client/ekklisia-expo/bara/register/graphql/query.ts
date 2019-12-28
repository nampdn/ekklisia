import gql from 'graphql-tag'

export const GET_DEVICE = gql`
  query getDevice($imei: String!) {
    device(where: { imei: $imei }) {
      id
      imei
      platform
      status {
        slug
        name
      }
      transactions(orderBy: createAt_DESC) {
        id
        action {
          name
          slug
        }
        profile {
          name
        }
        createAt
      }
      createdAt
      updatedAt
    }
  }
`
