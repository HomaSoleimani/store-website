import React, { Fragment, useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { successMessage } from "./../../utils/message";

const Order = () => {
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی میباشد",
        min: "کمتر از 11 کاراکتر نباید باشد",
        email: "ایمیل نوشته شده صحیح نمی باشد",
        phone: "شماره تلفن را درست وارد کنید",
      },
      element: (message) => <div style={{ color: "red" }}>{message}</div>,
    })
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validator.current.allValid()) {
      successMessage(".سفارش شما با موفقیت ثبت شد");
    } else {
      validator.current.showMessages();
    }
  };
  return (
    <Fragment>
      <section className="order mt-4">
        <form
          className="d-flex flex-column justify-content-center align-items-center"
          onSubmit={(event) => handleSubmit(event)}
        >
          <textarea
            placeholder="آدرس خود را وارد کنید."
            value={address}
            name="address"
            onChange={(e) => {
              setAddress(e.target.value);
              validator.current.showMessageFor("address");
            }}
          />
          {validator.current.message("address", address, "required|min:11")}
          <input
            type="tel"
            name="phone"
            value={phone}
            placeholder="موبایل خود را وارد کنید"
            onChange={(e) => {
              setPhone(e.target.value);
              validator.current.showMessageFor("tel");
            }}
          />
          {validator.current.message("tel", phone, "required|min:11|phone")}
          <button type="submit" className="bttn btn-l">
            ثبت سفارش
          </button>
        </form>
      </section>
    </Fragment>
  );
};

export default Order;
