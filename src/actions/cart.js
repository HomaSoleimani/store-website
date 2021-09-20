export const addToCart = (id, count) => {
  return async (dispatch, getState) => {
    const products = [...getState().products];
    const productIndex = products.findIndex((product) => product.id === id);
    const product = products[productIndex];
    product.count = count;
    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];
    // const cart = [...getState().cart, product];
    const cart = [...oldCart, product];
    localStorage.setItem("cart", JSON.stringify(cart));
    await dispatch({
      type: "ADD_CART",
      payload: cart,
    });
  };
};
export const updateCart = (id, count) => {
  return async (dispatch, getState) => {
    // const cart = [...getState().cart];
    const cart = JSON.parse(localStorage.getItem("cart"));
    let filteredCart = [];
    if (count == 0) {
      filteredCart = cart.filter((product) => product.id !== id);
    }
    if (cart) {
      const productIndex = cart.findIndex((product) => product.id === id);
      const product = cart[productIndex];
      product.count = count;
    }
    let updatedCart = filteredCart.length != 0 ? filteredCart : cart;
    console.log(updatedCart, "5555");
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    await dispatch({
      type: "UPDATE_CART",
      payload: filteredCart ? filteredCart : cart,
    });
  };
};
export const deleteCart = (id) => {
  return async (dispatch, getState) => {
    // const cart = [...getState().cart];
    const cart = JSON.parse(localStorage.getItem("cart"));
    const filteredCart = cart.filter((product) => product.id !== id);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
    await dispatch({
      type: "DELETE_CART",
      payload: filteredCart,
    });
  };
};
export const deleteAllCart = () => {
  return async (dispatch) => {
    localStorage.removeItem("cart");
    await dispatch({
      type: "DELETE_CART",
      payload: [],
    });
  };
};
