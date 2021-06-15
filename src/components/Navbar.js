import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, } from "semantic-ui-react";
import { AccountContext } from '../providers/AccountProvider'

// with useContext hook

const Navbar = () => {
    const { username } = useContext(AccountContext)
    const { pathname } = useLocation()
    return (
        <Menu>
            <NavLink to="/">
                <Menu.Item active={pathname === '/'}>
                    Home
                </Menu.Item>
            </NavLink>
            <NavLink to="/account/profile">
                <Menu.Item active={pathname === '/account/profile'}>
                    {username}
                </Menu.Item>
            </NavLink>
        </Menu>
    )
}

export default Navbar;







// with consumer
// import { AccountConsumer } from '../providers/AccountProvider'

// higher order component, basically wraps a component and
// cas pass it some data
{/* <AccountConsumer>
    {value => (// wrapped component here, no has acess to value)}
</AccountConsumer> */}

// const Navbar = () => {
//     const { pathname } = useLocation()
//     return (
//         <AccountConsumer>
//             { value => (
//                 <Menu>
//                     <NavLink to="/">
//                         <Menu.Item active={pathname === '/'}>
//                             Home
//                 </Menu.Item>
//                     </NavLink>
//                     <NavLink to="/account/profile">
//                         <Menu.Item active={pathname === '/account/profile'}>
//                             {/* Will be replaced with the actual username */}
//                             {value.username}
//                         </Menu.Item>
//                     </NavLink>
//                 </Menu>
//             )
//             }
//         </AccountConsumer>
//     )
// }

// export default Navbar;
