import React from 'react'
import {NavLink} from "react-router-dom";
import PageNotFound from './NotFound.png'
function Error404() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: "center"}}>
            <h2>PAGE NOT FOUND</h2>
            <img src={PageNotFound} style={{height: '500px', width: '700px'}}/>
            <p style={{textAlign:"center"}}>
                <NavLink to="/">Go to Home </NavLink>
            </p>
        </div>
    )
}

export default Error404
