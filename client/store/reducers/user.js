import { UserActions } from '../actions/user'

const initialState = {
  data: null,
  isLoading: false,
  attempted: false
}

export default function UserReducer(state = initialState, { type, payload }) {
  switch (type) {
    case UserActions.USER_LOGGING_IN:
      return { ...initialState, isLoading: true, attempted: true }
    case UserActions.USER_LOGGED_IN:
      return { data: payload, isLoading: false, attempted: true }
    case UserActions.USER_LOG_IN_FAILED:
      return { data: null, isLoading: false, attempted: true }
    case UserActions.USER_LOGGED_OUT:
      return initialState
    default:
      return state
  }
}
