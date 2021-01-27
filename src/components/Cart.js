import { useState } from 'react';

const Cart = (props) => {
  const { cart } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const expand = () => setIsExpanded(!isExpanded);

  return (
    <div className='cart' onClick={expand} >
      <p>CART</p>
        {isExpanded
          ? <ul>
              {cart.map((item) => (
                <li key={item.isbn}>{item.title} - {item.price}</li>
              ))}
            </ul>
          : <p>{cart.length}</p>
        }
    </div>
  )
}

export default Cart;
