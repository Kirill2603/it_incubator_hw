import React from 'react'
import { Link } from "react-router-dom";
import {PATH} from "./Routes";


function Header() {
    return (
        <div>
            <Link to={PATH.PRE_JUNIOR}>PreJunior</Link>
            <Link to={PATH.JUNIOR}>Junior</Link>
            <Link to={PATH.JUNIOR_PLUS}>JuniorPlus</Link>

        </div>
    )
}

export default Header
