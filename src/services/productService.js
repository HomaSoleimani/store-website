import http from "./httpService";
import config from "./config.json";

export const getProducts = () => {
  return http.get(`${config.shopApi}`);
};
