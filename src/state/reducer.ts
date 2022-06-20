import { State } from "./state"

export type Action =
  |  {
      type: "SET_NOTIFICATION";
      payload: string;
    }
  | {
      type: "REMOVE_NOTIFICATION";
    }

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return {
            message: action.payload
        }

    case "REMOVE_NOTIFICATION": 
      return {
        message: ''
      }

    default:
      return state
  }
}

let timeoutId: NodeJS.Timeout
export const setNotification = (data: string): Action => {
  clearTimeout(timeoutId)

  timeoutId = setTimeout(() => {
    removeNotification()
  }, 3000)
  
  return {
    type: 'SET_NOTIFICATION',
    payload: data,
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICAION',
  }
}