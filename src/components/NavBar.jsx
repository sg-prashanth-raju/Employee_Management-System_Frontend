import { AppBar, Toolbar, styled, Button } from '@mui/material';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import useLogout from "../hooks/useLogout";
import useRoleVerify from "../hooks/useRoleVerify";

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
    const [roleVerify]   = useRoleVerify();

    const signOut = async () => {
        await logout();
        navigate('/login');
    }

    return (
        <>
            <Header position="static">
                <Toolbar>
                    <Tabs to="/" exact>Home</Tabs>
                    {roleVerify(["Editor"]) ?
                        <Tabs to="add" exact>Add Employee</Tabs> :
                        <></>
                    }
                    <Button variant="contained" color="primary" onClick={() => signOut()}>Logout</Button>
                </Toolbar>
            </Header>
            <Outlet />
        </>
    )
}

export default NavBar;