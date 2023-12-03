import React from "react";
// import SearchIcon from "@material-ui/icons/Search"
import SearchIcon from '@material-ui/icons/Search'; 
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import './Header.css'
import { Link } from "react-router-dom";

function Header(){
    return(
        <nav className="header">                
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            <div className="Header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />   
            </div>
            <div className="header__nav">
                {/* 1st link */}
                <Link to="/" className="header__link">
                    <div className="Header__option">
                        <span className="Header__optionLineOne">Hello, User</span>
                        <span className="Header__optionLineTwo">Sign In or Sign Out</span>
                    </div>
                </Link>
                {/* 2st link */}
                <Link to="/" className="header__link">
                    <div className="Header__option">
                        <span className="Header__optionLineOne">Returns</span>
                        <span className="Header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/* 3st link */}
                <Link to="/" className="header__link">
                    <div className="Header__option">
                        <span className="Header__optionLineOne">Your</span>
                        <span className="Header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    {/* number of item in basket */}
                    <span className="header__optionLineTwo header__basketCount">2</span>
                    
                </div>
            </Link>
        </nav>
    )
}

export default Header;