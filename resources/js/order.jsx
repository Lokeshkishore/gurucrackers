import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar/Navbar';
import Container from './Components/Container/Container';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import OrderForm from './Components/Order/OrderForm';

const rootElement = document.getElementById('order-root');

if (!rootElement) {
  console.error('❌ No element with id="root" found');
} else {
  const name = rootElement.dataset?.name || 'Guest';

  const Order = () =>
  <>
     <Navbar/>
     <OrderForm/>
     <Footer/>
  </>;

  ReactDOM.createRoot(rootElement).render(<Order/>);
}
