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

export const SCHEDULE_UNTIL_NOW = gql`
  query {
    scheduleUntilNow {
      id
      date
      activity {
        id
        name
      }
    }
  }
`

export const ATTENDANCE = gql`
  query {
    members: membersInGroup {
      id
      fullName
      facebookId
    }
    schedules: scheduleUntilNow {
      id
      date
      activity {
        id
        name
      }
    }
  }
`
