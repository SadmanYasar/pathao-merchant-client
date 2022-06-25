import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import ShipmentListPage from './ShipmentListPage/index'
import { Container } from '@chakra-ui/react'
import ShipmentOrdersPage from './ShipmentOrdersPage'
import Notification from './components/Notification'
import { useEffect } from 'react'
import { initStoragePersistence, isStoragePersisted, persist } from './utils/utils'

const App = () => {
  /*
  ====================================
   TODO - Add persistent storage
   TODO - Add search bar in order page
   TODO - Add option to clear all data
   TODO - Add option to upload CSV
  ====================================
   */

  useEffect(() => {
    const initStorage = async () => {
      try {
        const isStoragePersistent = await isStoragePersisted()

        if(isStoragePersistent) return null

        //initStoragePersistence()
        const isPersisted = await persist()
        console.log(isPersisted)

      } catch (error) {
        console.log(error)
      }
    }
    
    initStorage()
  }, [])
  
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
