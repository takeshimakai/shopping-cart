import { useEffect, useState } from 'react';

const CartIcon = (props) => {
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
    <div className='cart-icon'>
      <p>CART ({quantity})</p>
    </div>
  )
}

export default CartIcon;
