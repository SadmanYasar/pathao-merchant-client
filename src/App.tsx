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
   * TODO - Add error component
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
