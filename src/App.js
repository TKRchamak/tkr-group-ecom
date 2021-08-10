import './App.css';
import Shop from './Components/Home/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductDetail from './Components/Home/ProductDetail/ProductDetail';
import CartReview from './Components/Home/CartReview/CartReview';
import { createContext, useState } from 'react';
import LogIn from './Components/LoginAll/LogIn/LogIn';
import Shipping from './Components/Home/Shipping/Shipping';
import Admin from './Components/Dashboard/Admin/Admin';
import PrivateRoute from './Components/LoginAll/PrivateRoute/PrivateRoute';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import ProductList from './Components/Dashboard/ProductList/ProductList';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import DashBoard from './Components/Dashboard/DashBoard/DashBoard';

export const cartContest = createContext();
export const userContest = createContext();
export const newUserContest = createContext();


function App() {
  const [cart, setCart] = useState([]);

  const [user, setUser] = useState({
    isUser: false,
    name: '',
    phone: '',
    email: '',
    password: '',
    img: ''
  })
  const [newUser, setNewUser] = useState(false);





  return (
    <Router>
      <cartContest.Provider value={[cart, setCart]}>
        <userContest.Provider value={[user, setUser]}>
          <newUserContest.Provider value={[newUser, setNewUser]}>
            <div className="App">
              {/* <Header></Header> */}
              <Switch>
                <Route path="/shop">
                  <Shop></Shop>
                </Route>
                <Route exact path="/">
                  <Shop></Shop>
                </Route>
                <PrivateRoute path="/dashboard">
                  <DashBoard></DashBoard>
                </PrivateRoute>
                <Route path="/product/:id">
                  <ProductDetail></ProductDetail>
                </Route>
                <Route path="/cart/review">
                  <CartReview></CartReview>
                </Route>
                <Route path="/login">
                  <LogIn></LogIn>
                </Route>
                <PrivateRoute path="/shipping">
                  <Shipping></Shipping>
                </PrivateRoute>
                <PrivateRoute path="/admin">
                  <Admin></Admin>
                </PrivateRoute>
                <PrivateRoute path="/addAdmin">
                  <AddAdmin></AddAdmin>
                </PrivateRoute>
                <PrivateRoute path="/addProduct">
                  <AddProduct></AddProduct>
                </PrivateRoute>
                <PrivateRoute path="/productList">
                  <ProductList></ProductList>
                </PrivateRoute>
              </Switch>
            </div>
          </newUserContest.Provider>
        </userContest.Provider>
      </cartContest.Provider>
    </Router>

  );
}

export default App;
