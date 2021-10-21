import React from 'react'
import "./Header.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';


const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" />
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchOutlinedIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">Sign in</span>
                </div>
                    
                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                
                <Badge badgeContent={4} color="primary" className="header__optionBasket">
                    <ShoppingCartOutlinedIcon />
                </Badge>
            </div>

        </div>
    )
}

export default Header
