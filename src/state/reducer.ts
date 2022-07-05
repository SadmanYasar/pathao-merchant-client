import { State } from "./state"

export type Action =
  | {
    type: "SET_NOTIFICATION";
    payload: State;
  }
  | {
    type: "REMOVE_NOTIFICATION";
  }

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return {
        message: action.payload.message,
        type: action.payload.type
      }

    case "REMOVE_NOTIFICATION":
      return {
        message: '',
        type: 'success'
      }

    default:
      return state
  }
}

export const setNotification = (data: State): Action => {
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
