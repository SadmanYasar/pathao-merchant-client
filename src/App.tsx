import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import ShipmentListPage from './ShipmentListPage/index'
import { Container } from '@chakra-ui/react'
import ShipmentOrdersPage from './ShipmentOrdersPage'
import { useEffect } from 'react'
import { initStoragePersistence, isStoragePersisted } from './utils/utils'
import { setNotification, useStateValue } from './state'

const App = () => {
  const [, dispatch] = useStateValue()

  /*
  ====================================
   TODO - Add search bar in order page
   TODO - Add option to clear all data
   TODO - Add option to upload CSV
  ====================================
   */

  useEffect(() => {
    /*
    ============================
    Persistent only when user
    bookmarks
    ============================
    */
    const initStorage = async () => {
      try {
        const isStoragePersistent = await isStoragePersisted()

        if(isStoragePersistent) return null

        await initStoragePersistence()
        
        const isPersisted = await isStoragePersisted()
        
        if(!isPersisted) {
          dispatch(setNotification({
            message: 'Bookmark this page to get persistent storage',
            type: 'info'
          }))
        }

      } catch (error) {
        dispatch(setNotification({
          message: 'We are having difficulties loading data',
          type: 'error'
      }))
      }
    }
    
    initStorage()
  }, [])
  
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
