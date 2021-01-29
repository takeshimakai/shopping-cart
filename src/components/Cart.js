import { useEffect, useState } from 'react';

const Cart = (props) => {
  const { cart } = props;

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let obj of cart) {
      total += obj.quantity;
    }
    setQuantity(total);
  }, [cart]);

  return (
    <div className='cart'>
      <p>CART ({quantity})</p>
    </div>
  )
}

export default Cart;
