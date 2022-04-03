import React from 'react';
import { ShipmentLists } from './components/ShipmentLists';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import ShipmentOrdersLists from './components/ShipmentOrderListsView';

const App = () => {
  /**
   * *Done - Add shipment list button
   * TODO - Add Update operation for each shipment and order
   * *Done - Add React-Router
   */

  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
      </nav>

      <Routes>
        <Route path='/' element={<ShipmentLists />} />
        <Route path='/shipments/:id' element={<ShipmentOrdersLists />} />
      </Routes>
    </Router>
    
  );
}

export default App;
