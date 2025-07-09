import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineCubeTransparent, HiOutlineSearch, HiOutlineShoppingCart } from 'react-icons/hi';
import WalmartNavbar from '../Navigation/WalmartNavbar';

const Header = () => {
    return (
        <header className="bg-walmart-blue text-white shadow-md sticky top-0 z-50">
            <WalmartNavbar />
        </header>
    );
};

export default Header;