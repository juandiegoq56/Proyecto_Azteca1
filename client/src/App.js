import React from 'react';
<<<<<<< HEAD
import { UserContextProvider } from './components/Usercontex';
import App1 from './Vistas/Register';
import App3 from './Vistas/login';
import Dashboard from './Vistas/Dashboard'
import App5 from './Vistas/Perfil'
import AppCard from './Vistas/AppCard';
import {ProtectedRoute} from "./components/middelware";
import {ProtectedRouteLogin} from "./components/middelware";
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Header from './Vistas/headeraz';
=======
import { UserContextProvider } from './Usercontex';
import App1 from './Register';
import App3 from './login';
import Dashboard from './Dashboard'
import AppCard from './AppCard';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
>>>>>>> 21a2885c690505ef28f21f831b53ab00fe10fa1e

function App() {
  return (
    <UserContextProvider>
<<<<<<< HEAD
     <Router>
      <Routes>
        
      <Route path="/home" element={<ProtectedRoute  redirectTo="/login"><Dashboard /></ProtectedRoute>} />
      <Route path="/login" element={<ProtectedRouteLogin  redirectTo="/Home"><App3 /></ProtectedRouteLogin>} />
      <Route path="/Register" element={<ProtectedRouteLogin  redirectTo="/Home"><App1 /></ProtectedRouteLogin>} />
      <Route path="*" element={<App5/>} />
      <Route path="/H" element={<ProtectedRouteLogin  redirectTo="/Home"><Header /></ProtectedRouteLogin>} />
=======
    <Router>
      {/* Definir tus rutas dentro del componente Router */}
      <Routes>
        <Route path="/Register" element={<App1/>} />
        <Route path="/Login" element={<App3 />} />
        <Route path="/Home" element={<Dashboard />} />
        <Route path="/H" element={<AppCard />} />
>>>>>>> 21a2885c690505ef28f21f831b53ab00fe10fa1e
        
        {/* Otras rutas */}
      </Routes>
    </Router>
    </UserContextProvider>
  );
}


export default App;