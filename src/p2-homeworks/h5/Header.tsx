import React from 'react'
import { NavLink } from "react-router-dom";
import {PATH} from "./Routes";
import './header.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
function Header() {

    return (

        <div className='Header'>
            <div className='NavLinkWrapper'>
                <NavLink to={PATH.PRE_JUNIOR} ><SuperButton>PreJunior</SuperButton></NavLink>
                <NavLink to={PATH.JUNIOR} ><SuperButton>Junior</SuperButton></NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} ><SuperButton>JuniorPlus</SuperButton></NavLink>
                <div className='Levels'>Levels</div>
            </div>

        </div>
    )
}

export default Header
