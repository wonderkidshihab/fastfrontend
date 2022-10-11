import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import './index.css';
import ProductPage from './views/Product/Product';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
