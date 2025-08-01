import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductList from './Components/AdminProducts/ProductList';

const rootElement = document.getElementById('admin-root');

if (!rootElement) {
  console.error('❌ No element with id="root" found');
} else {
  const name = rootElement.dataset?.name || 'Guest';

  const Admin = () =>
  <>
   <ProductList/>
  </>;

  ReactDOM.createRoot(rootElement).render(<Admin/>);
}
