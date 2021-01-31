import './styles.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';
import CartIcon from './components/CartIcon';
import Cart from './components/Cart'

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book, quantity) => {
    const alreadyInCart = cart.some((item) => item.isbn === book.isbn);
    if (alreadyInCart) {
      const newCart = cart.map((item) => {
        if (item.isbn === book.isbn) {
          item.quantity += Number(quantity.current.value);
        }
        return item;
      })
      setCart(newCart);
    } else {
      setCart((prevCart) => [
        ...prevCart,
        {
          ...book,
          quantity: Number(quantity.current.value)
        }
      ]);
    }
  }

  const handleCartQuantityChange = (e, book) => {
    const quantity = Number(e.target.value);
    const updatedCart = cart.map((item) => {
      if (item.isbn === book.isbn) {
        item.quantity = quantity;
      }
      return item;
    })
    setCart(updatedCart);
  }

  const removeBook = (book) => {
    setCart((prevCart) => prevCart.filter((item) => item.isbn !== book.isbn));
  }

  return (
    <BrowserRouter>
      <Nav />
      <Link to='/shopping-cart/cart'>
        <CartIcon cart={cart} />
      </Link>
      <Switch>
        <Route exact path='/shopping-cart' component={Home} />
        <Route exact path='/shopping-cart/shop'>
          <Shop addToCart={addToCart} />
        </Route>
        <Route exact path='/shopping-cart/cart'>
          <Cart
            cart={cart}
            handleCartQuantityChange={handleCartQuantityChange}
            removeBook={removeBook}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
