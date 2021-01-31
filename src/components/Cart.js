import { useEffect, useState } from 'react';

const Cart = (props) => {
  const { cart, handleCartQuantityChange, removeBook } = props;

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let book of cart) {
      total += book.quantity * book.price;
    }
    setTotal(total);
  }, [cart]);

  return (
    <div className='cart-container main-container'>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th className='quantity-column'>Quantity</th>
            <th className='price-column'>Price</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((book) => (
            <tr key={book.isbn}>
              <td>{book.title}</td>
              <td>
                <input
                  className='cart-quantity-input'
                  type='number'
                  value={book.quantity}
                  min='1'
                  onChange={(e) => handleCartQuantityChange(e, book)}
                />
              </td>
              <td className='price-td'>${book.price * book.quantity}</td>
              <td className='remove'>
                <button className='remove-btn' onClick={() => removeBook(book)}>&#10005;</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
              <td />
              <td>Total</td>
              <td className='price-td'>${total}</td>
              <td />
            </tr>
        </tfoot>
      </table>
      <button className='checkout-btn'>Checkout</button>
    </div>
  )
}

export default Cart;
