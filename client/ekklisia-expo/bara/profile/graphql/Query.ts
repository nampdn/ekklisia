import gql from 'graphql-tag'

export const GET_PROFILES = gql`
  query getProfiles {
    profiles(orderBy: name_ASC) {
      id
      name
      slug
      church
      photoUrl
      birth
      phoneNumber
      devices {
        id
      }
    }
  }
`

export const SEARCH_PROFILES = gql`
  query searchProfiles($term: String!) {
    profiles: searchProfiles(term: $term) {
      id
      name
      slug
      church
      photoUrl
      birth
      phoneNumber
      devices {
        id
      }
    }
  }
`
