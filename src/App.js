import './styles.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    const alreadyInCart = cart.some((item) => item.isbn === book.isbn);
    if (alreadyInCart) {
      const newCart = cart.map((item) => {
        if (item.isbn === book.isbn) {
          item.quantity += 1;
        }
        return item;
      })
      setCart(newCart);
    } else {
      setCart((prevCart) => [
        ...prevCart,
        {
          ...book,
          quantity: 1
        }
      ]);
    }
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <BrowserRouter>
      <Nav />
      <Cart cart={cart} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop'>
          <Shop addToCart={addToCart} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
