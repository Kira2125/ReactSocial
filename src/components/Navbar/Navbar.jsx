import React from 'react';
import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <div>
                <NavLink to="/profile" activeClassName={css.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/messages" activeClassName={css.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' activeClassName={css.active}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' activeClassName={css.active}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/setting' activeClassName={css.active}>Setting</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;