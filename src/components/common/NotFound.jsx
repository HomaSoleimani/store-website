import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Fragment>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>شرمنده همچین صفحه ایی نداریم</h2>

            <Link to="/">
              <span className="return-link">برگشت به صفحه اصلی</span>
            </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
