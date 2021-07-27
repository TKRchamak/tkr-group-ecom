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
import LogIn from './Components/LogIn/LogIn';

export const cartContest = createContext();
export const userContest = createContext();
export const newUserContest = createContext();


function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    img: ''
  })
  const [newUser, setNewUser] = useState(false)


  return (
    <Router>
      <cartContest.Provider value={[cart, setCart]}>
        <userContest.Provider value={[user, setUser]}>
          <newUserContest.Provider value={[newUser, setNewUser]}>
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
                <Route path="/logIn">
                  <LogIn></LogIn>
                </Route>
              </Switch>
            </div>
          </newUserContest.Provider>
        </userContest.Provider>
      </cartContest.Provider>
    </Router>

  );
}

export default App;
