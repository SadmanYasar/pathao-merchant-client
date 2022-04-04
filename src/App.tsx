import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import ShipmentOrdersLists from './components/ShipmentOrderListsView';
import ShipmentListPage from './components/ShipmentListPage/index';

const App = () => {
  /**
   * TODO - Change shipment types to match spreadsheet entries
   * TODO - Exhaustive type checking if applicable
   * TODO - Use formik
   * TODO - Use Bootstrap/ChakraUI/MaterialUI
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
