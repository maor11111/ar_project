import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import '../bar.css'



const pages = [
    { name: 'Login', route: 'login' },
    { name: 'Tdl', route: '/Tdl' },
//    { name: 'My business', route: '/mybusiness' },
    { name: 'thirdpage', route: '/thirdpage'}
  ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className='menu-bar'>
    <AppBar position="static">
        {/* <img src="../public/qqq.svg"/> */}
 <Toolbar>
        {pages.map((page,index) => (
 <span key={index} style={{ marginRight: '20px' }}>
        <Typography variant="h6" component="div">
         <a href={page.route} style={{ color: 'white'}}>{page.name}</a> 
        </Typography>
        </span>
        ))}

      </Toolbar>
    </AppBar>
    </div>
  );
}
export default ResponsiveAppBar;