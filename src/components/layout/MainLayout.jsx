import React, { Fragment } from 'react';
import { withRouter } from "react-router-dom";
import TopNav from './../navs/TopNav';
import Header from './../common/Header';
import Footer from './../common/Footer';

const MainLayout = (props) => {
    const { pathname } = props.location;
    return ( 
        <Fragment>
            <TopNav />
            {pathname === "/" ? <Header /> : null}
            <main id="home-page">
                <div className="container">{props.children} </div>
            </main>
            <Footer />
        </Fragment>
     );
}
 
export default withRouter(MainLayout);