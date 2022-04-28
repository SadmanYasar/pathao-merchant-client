import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import ShipmentOrdersLists from './ShipmentPage/ShipmentOrderLists';
import ShipmentListPage from './ShipmentListPage/index';
import { Container } from '@chakra-ui/react';

const App = () => {
  /**
   * *DONE - Change shipment types to match spreadsheet entries
   * TODO - Add update form
   * TODO - Add form validation using formik
   * TODO - Add error component
   * TODO - Use formik
   * TODO - Add modal cards for each shipment item
   */

  return (
    <Container maxW="container.xl" p={0}>
    <Router>
      <Routes>
        <Route path='/' element={<ShipmentListPage />} />
        <Route path='/shipments/:id' element={<ShipmentOrdersLists />} />
      </Routes>
    </Router>
    </Container>
  );
}

export default App;
