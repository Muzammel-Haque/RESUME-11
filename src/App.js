import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Order from './components/Order/Order/Order';
import AddService from './components/Home/AddServices/AddService';
import PlaceOrder from './components/Order/PlaceOrder/PlaceOrder';
import OrderList from './components/Order/OrderList/OrderList';
import Review from './components/Review/Review';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import AdminOrder from './components/Admin/AdminOrder/AdminOrder';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import ManageService from './components/Admin/ManageServices/MangeService';
import ManageOrderList from './components/Admin/ManageOrderList/ManageOrderList';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact  path="/">
          <Home />
        </Route>
        <Route  path="/home">
          <Home />
        </Route>
        <PrivateRoute path="/order/:id">
            <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <Route path="/orderList">
            <OrderList></OrderList>
        </Route>
        <PrivateRoute path="/addReview">
            <Review></Review>
        </PrivateRoute>
        <PrivateRoute path="/order">
          <Order />
        </PrivateRoute>
        <PrivateRoute path="/adminOrder">
          <AdminOrder />
        </PrivateRoute>
        <PrivateRoute path="/addAdmin">
          <AddAdmin />
        </PrivateRoute>
        <PrivateRoute path="/manageService">
          <ManageService />
        </PrivateRoute>
        <PrivateRoute path="/manageOrder">
          <ManageOrderList />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/addService">
          <AddService />
        </PrivateRoute>
      </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
