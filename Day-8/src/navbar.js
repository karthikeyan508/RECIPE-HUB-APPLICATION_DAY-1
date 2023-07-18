import { AppBar, Button,IconButton, Toolbar } from '@mui/material'
import React from 'react';
import "./navbar.css";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import Login from '../pages/login';
import { Link } from 'react-router-dom';
// import search_books from './Search';
// import RecipePage from './recipe';

function Navbar() {
  

  return (
    <div className='navigation'>
    <AppBar>
    <Toolbar className='NavBar'>
    {/* <IconButton >
    <MenuIcon fontSize='large' className='menu'/></IconButton> */}
    <Link to='/'>
    <Button className='nav'>Home</Button>
    </Link>
    <Link to='/login'>
    <Button className='nav'>Login</Button>
     </Link>
    <Link to='/about'>
    <Button className='nav'>AboutUs</Button>
    </Link>
    <Link to='/rec'>
    <Button className='nav'>Recipes</Button>
    </Link>
    <Link to='/upload'>
    <Button className='nav'>Upload Recipe</Button>
    <Button className='nav'>Favourite</Button>
    </Link>
    <Link to='/Favourite'>
    </Link>

    </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navbar