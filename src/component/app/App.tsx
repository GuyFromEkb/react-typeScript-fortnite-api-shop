import React from 'react';
import { useState } from 'react';
import { ContextProvider } from '../../context/context';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Shop from '../shop/Shop';
import Cart from '../cart/Cart';
import './App.scss';

const App: React.FC = () => {
  const [showCart, setShowCart] = useState(false);

  const onShowCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <ContextProvider>
      <Header showCart={onShowCart} />
      <div className='container'></div>
      <main>
        <Shop />
        {showCart && <Cart show={onShowCart} />}
      </main>
      <Footer />
    </ContextProvider>
  );
};

export default App;
