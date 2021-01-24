import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className='nav'>
      <li>
        <Link to='/'>HOME</Link>
      </li>
      <li>
        <Link to='/shop'>SHOP</Link>
      </li>
    </ul>
  )
}

export default Nav;
