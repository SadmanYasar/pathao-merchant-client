import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import ShipmentOrdersLists from './components/ShipmentOrderListsView';
import ShipmentListPage from './components/ShipmentListPage/ShipmentLists';

const App = () => {
  /**
   * *Done - Add shipment list button
   * *Done - Add Update operation for each shipment and order
   * *Done - Add React-Router
   * TODO - Add search funtionality
   */

  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
      </nav>

      <Routes>
        <Route path='/' element={<ShipmentListPage />} />
        <Route path='/shipments/:id' element={<ShipmentOrdersLists />} />
      </Routes>
    </Router>
    
  );
}

export default App;
