import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className='nav'>
      <li>
        <Link to='/shopping-cart'>HOME</Link>
      </li>
      <li>
        <Link to='/shopping-cart/shop'>SHOP</Link>
      </li>
    </ul>
  )
}

export default Nav;
