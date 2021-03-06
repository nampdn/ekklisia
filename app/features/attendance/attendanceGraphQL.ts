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

export const GET_GROUP_DATA = gql`
  query {
    myGroups: myGroups {
      id
      name
    }
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

export const GET_ATTENDANCE = gql`
  query($slug: String!) {
    attendance(where: { slug: $slug }) {
      id
      attendees {
        id
      }
      absentees {
        id
      }
    }
  }
`

export const MAKE_ATTENDANCE_MUTATION = gql`
  mutation makeAttendance(
    $scheduleId: ID!
    $attendees: [ID!]
    $absentees: [ID!]
  ) {
    makeAttendance(
      scheduleId: $scheduleId
      attendees: $attendees
      absentees: $absentees
    ) {
      id
      slug
      attendees {
        id
      }
      absentees {
        id
      }
    }
  }
`
