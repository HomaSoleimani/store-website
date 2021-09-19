import { getProducts } from "../services/productService";
import { successMessage } from "../utils/message";

export const getAllProducts = () => {
  return async (dispatch) => {
    const { data } = await getProducts();
    await dispatch({
      type: "INIT",
      payload: JSON.parse(data[0].column_1).products,
    });
  };
};

