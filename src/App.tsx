import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import ShipmentOrdersLists from './components/ShipmentOrderListsView';
import ShipmentListPage from './components/ShipmentListPage/index';
import { Container } from '@chakra-ui/react';

const App = () => {
  /**
   * *DONE - Change shipment types to match spreadsheet entries
   * TODO - Exhaustive type checking if applicable
   * TODO - Use formik
   * TODO - Use Bootstrap/ChakraUI/MaterialUI
   */

  return (
    <Container maxW="container.xl" p={0} bg='blue.600' centerContent>
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
