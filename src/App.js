import './styles.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';
import Cart from './components/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Cart />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
