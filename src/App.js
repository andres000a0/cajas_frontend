import React from 'react';
import { BrowserRouter as Routes, Router, Route} from 'react-router-dom';
import Login from './pages/inicioSesion.jsx';
import Dashboard from './pages/views/dashboardContent.jsx'; // Importa el componente de Dashboard (debes crearlo)

function App() {
  return (
    <Routes>
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
    </Routes>
  );
}

export default App;
