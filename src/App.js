import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductDetail from './Components/ProductDetail/ProductDetail';
import CartReview from './Components/CartReview/CartReview';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';

export const cartContest = createContext()


function App() {
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <cartContest.Provider value={[cart, setCart]}>
        <div className="App">
          <Header></Header>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/product/:id">
              <ProductDetail></ProductDetail>
            </Route>
            <Route path="/cart/review">
              <CartReview></CartReview>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </div>
      </cartContest.Provider>
    </Router>

  );
}

export default App;
