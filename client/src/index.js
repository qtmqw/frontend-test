import React from 'react';
import ReactDOM from 'react-dom/client';

import { 
  BrowserRouter,
  Routes,
  Route }
  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Product from './pages/Product';
import Add from './pages/ADD';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route path="/" element={<Product />} />
        <Route path="/Add" element={<Add />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

