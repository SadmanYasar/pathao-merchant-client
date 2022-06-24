import React from 'react'
import { Alert, CloseButton } from "@chakra-ui/react"
import { useStateValue, removeNotification } from "../state"

const Notification = () => {
  const [state, dispatch] = useStateValue()
  return (
    <Alert
      status={state.error ? 'error' : 'success'}
      style={{ display: state.message ? '' : 'none', }}
    >
      {state.message}
      <CloseButton
        onClick={() => dispatch(removeNotification())}
      />
    </Alert>
  )
}

export default Notification