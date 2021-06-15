import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, } from "semantic-ui-react";

const Navbar = () => {
    const { pathname } = useLocation()
    return(
        <Menu>
            <NavLink to="/">
            <Menu.Item active={pathname === '/'}>
                Home
            </Menu.Item>
            </NavLink>
            <NavLink to="/account/profile">
            <Menu.Item active={pathname === '/account/profile'}>
                {/* Will be replaced with the actual username */}
                username
            </Menu.Item>
            </NavLink>
        </Menu> 
    )
}

export default Navbar;
