import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart } from "./../../actions/cart";
import { withRouter } from "react-router-dom";

const Cart = ({ history }) => {
  const dispatch = useDispatch();
  const reduxCart = useSelector((state) => state.cart);
  const cart = JSON.parse(localStorage.getItem("cart"));
  const [totalPrice, setTotalPrice] = useState(0);
  const deleteFromCart = (id) => {
    dispatch(deleteCart(id));
  };
  useEffect(() => {
    const total = cart.reduce((acc, cur) => {
      return acc + cur.price * cur.count;
    }, 0);
    setTotalPrice(total);
  }, [reduxCart]);
  return (
    <Fragment>
      <section className="carts d-flex justify-content-center align-items-center flex-column">
        <div className="cart-container row col-12 d-flex justify-content-center align-items-baseline py-3">
          {cart &&
            cart.map((product) => (
              <div className="cart col-8 col-sm-5 col-lg-3 col-xl-4 mx-2 mx-sm-3 my-3 pt-4 px-1">
                <h6 className="cart-title d-flex justify-content-between ">
                  محصول: <span className="cart-details">{product.title}</span>
                </h6>
                <hr />
                <h6 className="cart-title d-flex justify-content-between">
                  قیمت واحد:{" "}
                  <span className="cart-details">{product.price} تومان</span>
                </h6>
                <hr />
                <h6 className="cart-title d-flex justify-content-between">
                  تعداد:
                  <input
                    className="cart-input"
                    type="text"
                    placeholder="تعداد"
                    value={product.count}
                  />
                </h6>
                <hr />
                <h6 className="cart-title d-flex justify-content-between">
                  جمع:{" "}
                  <span className="cart-details">
                    {product.count * product.price} تومان
                  </span>
                </h6>
                <hr />
                <button
                  type="button"
                  className="bttn btn-sm cart-btn"
                  onClick={() => deleteFromCart(product.id)}
                >
                  <i className="fa fa-trash" />
                </button>
              </div>
            ))}
        </div>
        <section className="sum-carts my-3">
          <div className="sum-prices d-flex flex-column justify-content-center align-items-center">
            <h6 className="my-3">جمع کل سبد خرید:</h6>
            {cart.length != 0 ? (
              <p>{totalPrice} تومان</p>
            ) : (
              <p>سبد خرید شما خالیست.</p>
            )}
          </div>
          <button
            type="button"
            className="bttn btn-l my-2"
            onClick={() => history.push("/ordering")}
          >
            تایید
          </button>
        </section>
      </section>
    </Fragment>
  );
};

export default withRouter(Cart);
