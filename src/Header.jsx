import React from "react";
// import SearchIcon from "@material-ui/icons/Search"
import SearchIcon from '@material-ui/icons/Search'; 
import './Header.css'

function Header(){
    return(
        <nav className="header">                
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            <div className="Header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />   
            </div>
            {/* <Link to="/"> */}
                <div className="Header__option">
                    <span className="Header__optionLineOne">Hello, User</span>
                    <span className="Header__optionLineOne">Sign In or Sign Out</span>
                </div>
            {/* </Link> */}
        </nav>
    )
}

export default Header;