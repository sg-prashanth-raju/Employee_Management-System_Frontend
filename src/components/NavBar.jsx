import { AppBar, Toolbar, styled, Button } from '@mui/material';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import useLogout from "../hooks/useLogout";

const Header = styled(AppBar)`
    background: #111111;
`;

const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/login');
    }

    return (
        <>
            <Header position="static">
                <Toolbar>
                    <Tabs to="/" exact>Home</Tabs>
                    <Tabs to="add" exact>Add User</Tabs>
                    <Button variant="contained" color="primary" onClick={() => signOut()}>Logout</Button>
                </Toolbar>
            </Header>
            <Outlet />
        </>
    )
}

export default NavBar;