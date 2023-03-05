// реалізувати відображення обраних книжок та при кліку на кнопку "Purchase" список обраних книг повинен видалятися.
import React from 'react';
import Header from '../components/Header';
import Cart from '../components/Cart';
import Footer from '../components/Footer';

const CartPage = () => {
  return (
    <div>
      <Header />
      <Cart />
      <Footer />
    </div>
  )
}
export default CartPage;
