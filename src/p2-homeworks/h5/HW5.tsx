import React from 'react'
import Header from './Header'
import RoutesFun from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <HashRouter>

        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}

            <Header/>

            <RoutesFun/>


        </div>
            </HashRouter>
    )
}

export default HW5
