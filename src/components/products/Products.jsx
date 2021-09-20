import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, updateCart } from "./../../actions/cart";
import { successMessage, warningMessage } from "./../../utils/message";
import { isEqual } from "lodash";

const Products = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  // const products =
  //   pathname == "/archive" ? allProducts : allProducts.slice(0, 3);
  const user = useSelector((state) => state.user);
  const [inputChange, setInputChange] = useState([]);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const disabled = (i) =>
    inputChange[i]?.count == 0 && inputChange[i].icon == "fa fa-cart-plus";

  const p2e = (s) => s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
  const inputHandler = (count, i) => {
    const updatedChange = [...inputChange];
    if (isNaN(+p2e(count))) {
      updatedChange[i].count = 0;
      setInputChange(updatedChange);
    } else if (+p2e(count) <= 9) {
      updatedChange[i].count = +p2e(count);
      setInputChange(updatedChange);
    }
  };
  const add = (id, i) => {
    dispatch(addToCart(id, inputChange[i].count));
    const updatedChange = [...inputChange];
    updatedChange[i] = {
      background: "#f9a7a3",
      icon: "fa fa-pencil",
      count: inputChange[i].count,
    };
    setInputChange(updatedChange);
    successMessage(".محصول مورد نظر با موفقیت به سبد اضافه شد");
  };
  const update = (id, i) => {
    dispatch(updateCart(id, inputChange[i].count));
    const updatedChange = [...inputChange];

    updatedChange[i] =
      inputChange[i].count == 0
        ? {
            background: "#42b4a7",
            icon: "fa fa-cart-plus",
            count: 0,
          }
        : {
            background: "#f9a7a3",
            icon: "fa fa-pencil",
            count: inputChange[i].count,
          };
    setInputChange(updatedChange);

    const message =
      inputChange[i].count == 0
        ? ".محصول مورد نظر از سبد حذف شد"
        : ".محصول مورد نظر با موفقیت ویرایش شد";
    successMessage(message);
  };
  const handleSubmit = (id, i) => {
    if (isEqual(user, {})) {
      warningMessage(".ابتدا به سایت وارد شوید");
    } else {
      if (
        (inputChange[i].icon == "fa fa-cart-plus" &&
          cart.find((p) => p.id !== id)) ||
        cart.length == 0
      ) {
        add(id, i);
      } else if (cart.find((p) => p.id == id)) {
        update(id, i);
      }
    }
  };
  useEffect(() => {
    if (products) {
      setInputChange(
        Array.from({ length: products.length }, (_) => ({
          background: "#42b4a7",
          icon: "fa fa-cart-plus",
          count: 0,
        }))
      );
    }
  }, [products]);
  return (
    <Fragment>
      <main className="products d-flex justify-content-center align-items-center flex-column">
        <div className="card-container row col-12 d-flex justify-content-center align-items-baseline py-3">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="card col-8 col-sm-5 col-lg-3 col-xl-4 mx-2 mx-sm-3 my-3"
            >
              <div className="img-container">
                <img
                  src={product.image}
                  alt="product image"
                  className="card-img"
                />
                <div className="card-overlay d-flex justify-content-center align-items-center">
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
              <h6 className="card-title d-flex justify-content-between">
                {product.title}{" "}
                <span className="card-price">{product.price}تومان</span>
              </h6>
              <input
                className="card-input"
                type="text"
                placeholder="تعداد را وارد نمایید"
                value={inputChange[i] ? inputChange[i].count : 0}
                onChange={(e) => inputHandler(e.target.value, i)}
              />
              <button
                type="button"
                className="bttn btn-sm card-btn"
                onClick={() => handleSubmit(product.id, i)}
                disabled={
                  inputChange[i]?.count == 0 &&
                  inputChange[i].icon == "fa fa-cart-plus"
                }
                style={
                  !disabled(i)
                    ? {
                        background: inputChange[i]
                          ? inputChange[i].background
                          : { background: "#42b4a7" },
                      }
                    : { background: "#8fd6cd" }
                }
              >
                <i
                  className={
                    inputChange[i] ? inputChange[i].icon : "fa fa-cart-plus"
                  }
                />
              </button>
            </div>
          ))}
        </div>
        <Link to="/cart">
          <button type="button" className="bttn btn-m">
            مشاهده‌ی سبد خرید
          </button>
        </Link>
      </main>
    </Fragment>
  );
};

export default Products;
