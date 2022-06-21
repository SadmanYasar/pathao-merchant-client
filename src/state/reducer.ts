import { State } from "./state"

export type Action =
  |  {
      type: "SET_NOTIFICATION";
      payload: {
        message: string,
        error: boolean
      };
    }
  | {
      type: "REMOVE_NOTIFICATION";
    }

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return {
        message: action.payload.message,
        error: action.payload.error  
      }

    case "REMOVE_NOTIFICATION": 
      return {
        message: '',
        error: false
      }

    default:
      return state
  }
}

interface setNotificationPropType {
  message: string,
  error: boolean
}

export const setNotification = (data: setNotificationPropType): Action => {
  return {
    type: "SET_NOTIFICATION",
    payload: data,
  }
}

export const removeNotification = (): Action => {
  return {
    type: "REMOVE_NOTIFICATION",
  }
}