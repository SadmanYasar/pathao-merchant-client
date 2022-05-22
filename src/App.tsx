import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import ShipmentListPage from './ShipmentListPage/index'
import { Container } from '@chakra-ui/react'
import ShipmentOrdersPage from './ShipmentOrdersPage'

const App = () => {
  /**
   * TODO - Add error component
   */

  return (
    <Container maxW="container.xl" p={0}>
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
