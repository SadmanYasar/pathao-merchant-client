import React from 'react';
import { ShipmentLists } from './components/ShipmentLists';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import ShipmentListView from './components/ShipmentListView';

const App = () => {
  /**
   * TODO - Add shipment list button
   * TODO - Add CRUD operations for each shipment and order
   * *Done - Add React-Router
   */

  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
      </nav>

      <Routes>
        <Route path='/' element={<ShipmentLists />} />
        <Route path='/shipments/:id' element={<ShipmentListView />} />
      </Routes>
    </Router>
    
  );
}

export default App;
