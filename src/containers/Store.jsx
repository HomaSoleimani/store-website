import React, { Fragment, useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import Register from "../components/register/Register";
import Login from "../components/login/Login";
import Products from "../components/products/Products";
import Cart from "../components/cart/Cart";
import Order from "../components/cart/Order";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { decodeToken } from "../utils/decodeToken";
import { addUser, clearUser } from "../actions/user";
import Logout from "../components/login/Logout";
import NotFound from "../components/common/NotFound";
import UserContext from "../context/UserContext";

const Store = () => {
  const user = useSelector((state) => state.user);
  const reduxCart = useSelector((state) => state.cart);
  let [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = decodeToken(token);
      const dateNow = Date.now() / 1000;

      if (decodedToken.payload.exp < dateNow) {
        localStorage.removeItem("token");
        localStorage.removeItem("cart");
        dispatch(clearUser());
      } else dispatch(addUser(decodedToken.payload.user));
    }
  }, []);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, [reduxCart]);
  return (
    <Fragment>
      <MainLayout>
        <Switch>
          <Route
            path="/login"
            render={() =>
              isEmpty(user) ? (
                <UserContext>
                  <Login />
                </UserContext>
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/logout"
            render={() => (isEmpty(user) ? <Redirect to="/" /> : <Logout />)}
          />
          <Route
            path="/register"
            render={() =>
              isEmpty(user) ? (
                <UserContext>
                  <Register />
                </UserContext>
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route path="/archive" component={Products} />
          <Route
            path="/cart"
            render={() => (isEmpty(user) ? <Redirect to="/" /> : <Cart />)}
          />
          <Route
            path="/ordering"
            render={() => (isEmpty(cart) ? <Redirect to="/" /> : <Order />)}
          />
          {/* <Route path="/ordering" exact component={Order} /> */}
          <Route path="/" exact component={Products} />
          {/* <Route path="/course/:id" component={SingleCourse} />
            <Route path="/user-profile" component={UserProfile} /> */}
          <Route path="*" exact component={NotFound} />
        </Switch>
      </MainLayout>
    </Fragment>
  );
};

export default Store;
