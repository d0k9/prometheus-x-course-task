import React from 'react'

const Cart = ({ books }) => {
    return (
      <div>
        <button type="button" name="Purchase">Purchase</button>
        <h2>Cart</h2>
        {books.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {books.map(book => (
              <li key={book.id}>{book.title}</li>
            ))}
          </ul> 
        )} 
      </div> 
    ); 
  }; 
  export default Cart;