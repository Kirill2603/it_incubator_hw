import React from 'react'
import Header from './Header'
import RoutesFun from './Routes'
import {BrowserRouter} from "react-router-dom";

function HW5() {
    return (
        <BrowserRouter>
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}

            <Header/>

            <RoutesFun/>

            {/*</HashRouter>*/}
        </div>
            </BrowserRouter>
    )
}

export default HW5
