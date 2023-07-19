import React from 'react';
import './Header.css';
import logo from '../assets/images/logo.svg';
import FavIcon from '../assets/images/FavIcon.svg';
import BuyIcon from '../assets/images/BuyIcon.svg';
import SearchIcon from '../assets/images/SearchIcon.svg';


const Header = () => {
  return (
   <header>
    <div>
        <nav class="navbar">
            <img src={logo} alt="logo" />
            <div class="navbar__container-btn">
            <img class='search-icon' src={SearchIcon} alt="#"/>
            <input class="navbar__input" type="text" img={SearchIcon}  placeholder='Buscar producto...'  />
            <button class="navbar__btn-search">Buscar</button>
            </div>
            <div class="buttons__fav-buy">
            <button class="btn-fav"><img class="fav-icon" src={FavIcon} alt="Favorite" /></button>
            <button class="btn-buy"><img class="fav-buy" src={BuyIcon} alt="Buy" /></button>
            </div>
        </nav>
        
    </div>
   </header>

  )
};

export default Header;