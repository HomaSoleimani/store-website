import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Store from "./Store";

const App = () => {
  return (
    <BrowserRouter>
      <Store />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
};
export default App;
