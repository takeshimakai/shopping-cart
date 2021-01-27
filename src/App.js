import './styles.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  }

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
