import React from "react";
import { NavLink, Link } from "react-router-dom";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";

const TopNav = () => {
  const user = useSelector((state) => state.user);
  return (
    <nav className="top-nav">
      <div className="close-side" id="container-menu">
        <i className="fa fa-align-right" id="humburger-icon" />
        <div className="respons-nav" id="res-nav">
          <ul>
            <li>
              <NavLink to="/" activeStyle={{ color: "#42b4a7" }}>
                صفحه‌ی اصلی
                <i className="fa fa-home" />
              </NavLink>
            </li>
            <li>
              {" "}
              <a href="#about">درباره‌ی ما</a>
            </li>
            <li id="chevron-down">
              {" "}
              <NavLink
                to="/archive"
                className="product-link"
                activeStyle={{ color: "#2b3587" }}
              >
                محصولات
              </NavLink>
              {/* <i className="fa fa-chevron-down" />
              <ul className="hidden-sub-menu" id="sub-menu">
                <li>
                  <a href="#pen">خودکار</a>
                </li>
                <li>
                  <a href="#pen">مداد</a>
                </li>
                <li>
                  <a href="#pen">دفتر</a>
                </li>
              </ul> */}
            </li>
            <li>
              {" "}
              <a href="#contact">
                ارتباط با ما
                <i className="fa fa-phone" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Link to="/cart" className="shopping-basket">
        <i className="	fa fa-shopping-cart" />
      </Link>
      {!isEmpty(user) ? (
        <div className="sign-in">
          <i className="zmdi zmdi-account"></i>
          <NavLink to="/user-profile">{user.fullname}</NavLink> /{" "}
          <NavLink to="/logout">خروج</NavLink>
        </div>
      ) : (
        <span className="sign-in">
          <NavLink to="/login" activeStyle={{ color: "#42b4a7" }}>
            {" "}
            ورود{" "}
          </NavLink>{" "}
          /
          <NavLink to="/register" activeStyle={{ color: "#42b4a7" }}>
            {" "}
            عضویت{" "}
          </NavLink>
        </span>
      )}
    </nav>
  );
};

export default TopNav;
