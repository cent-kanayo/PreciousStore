import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppProvider from './context/userContext';
import ProductsProvider from './context/productsContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </AppProvider>
  </React.StrictMode>
);
