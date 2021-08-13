import './App.css';
import Shop from './Components/Shop/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductDetail from './Components/Shop/ProductDetail/ProductDetail';
import CartReview from './Components/Shop/CartReview/CartReview';
import { createContext, useEffect, useState } from 'react';
import LogIn from './Components/LoginAll/LogIn/LogIn';
import Shipping from './Components/Shop/Shipping/Shipping';
import Admin from './Components/Dashboard/Admin/Admin';
import PrivateRoute from './Components/LoginAll/PrivateRoute/PrivateRoute';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import ProductList from './Components/Dashboard/ProductList/ProductList';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import DashBoard from './Components/Dashboard/DashBoard/DashBoard';
import { getDatabaseCart } from './utilities/databaseManager';
import Home from './Components/Home/Home/Home';

export const cartContest = createContext();
export const userContest = createContext();
export const newUserContest = createContext();
export const productContext = createContext()


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log('cart', cart);

  const [user, setUser] = useState({
    isUser: false,
    name: '',
    phone: '',
    email: '',
    password: '',
    img: ''
  })
  const [newUser, setNewUser] = useState(false);

  // const collection = [];
  // setCart(collection)

  const creatArray = (pd) => {
    cart.push(pd);
  }

  const loadSingleData = (id, quantity) => {
    fetch(`https://vast-meadow-07590.herokuapp.com/singleProduct/${id}`)
      .then(res => res.json())
      .then(data => {
        data.quantity = quantity;
        console.log(data);
        creatArray(data)
      })
  }

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKey = Object.keys(saveCart);
    productKey.map(pdId => loadSingleData(pdId, saveCart[pdId]));
  }, [cart === []]);

  useEffect(() => {
    fetch('https://vast-meadow-07590.herokuapp.com/allProducts')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err))
  }, [])



  return (
    <Router>
      <cartContest.Provider value={[cart, setCart]}>
        <userContest.Provider value={[user, setUser]}>
          <newUserContest.Provider value={[newUser, setNewUser]}>
            <productContext.Provider value={[products, setProducts]}>
              <div className="App">
                {/* <Header></Header> */}
                <Switch>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>
                  <Route path="/home">
                    <Home></Home>
                  </Route>
                  <Route path="/shop">
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
            </productContext.Provider>
          </newUserContest.Provider>
        </userContest.Provider>
      </cartContest.Provider>
    </Router>

  );
}

export default App;
