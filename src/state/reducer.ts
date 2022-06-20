import { State } from "./state"

export type Action =
    {
      type: "SET_NOTIFICATION";
      payload: string;
    }

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return {
            message: action.payload
        }

    default:
      return state
  }
}

export const setNotification = (data: string): Action => {
  return {
    type: 'SET_NOTIFICATION',
    payload: data,
  }
}