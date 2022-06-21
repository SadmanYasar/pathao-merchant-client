import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import ShipmentListPage from './ShipmentListPage/index'
import { Alert, CloseButton, Container } from '@chakra-ui/react'
import ShipmentOrdersPage from './ShipmentOrdersPage'
import { removeNotification, useStateValue } from './state'

const Notification = () => {
  const [state, dispatch] = useStateValue()
  return(
    <Alert 
      status={state.error ? 'error' : 'success'} 
      style={{display: state.message ? '' : 'none',}}
    >
      {state.message}
      <CloseButton
        onClick={() => dispatch(removeNotification())}
      />
    </Alert>
  )
}

const App = () => {
  /*
  ====================================
   TODO - Add persistent storage
   TODO - Add search bar in order page
   TODO - Add option to clear all data
   TODO - Add option to upload CSV
  ====================================
   */

  return (

    <Container maxW="container.xl" p={0}>
    <Notification />
    <Router>
      <Routes>
        <Route path='/' element={<ShipmentListPage />} />
        <Route path='/shipments/:id' element={<ShipmentOrdersPage />} />
      </Routes>
    </Router>
    </Container>
  )
}

export default App
