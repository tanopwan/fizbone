import React from 'react';
import { Link } from 'react-router';

const MainMenu = () => (
    <div className = "fizbone-page-header">
        <Link to='/'> Home </Link>
        <Link to="/product"> Product </Link>
        <Link to="/wheretobuy"> Where to Buy </Link>
        <Link to="/about"> Contact Us </Link>
    </div>
);

export default MainMenu;
