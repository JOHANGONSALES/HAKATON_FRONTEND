import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg';
import FavIcon from '../assets/FavIcon.svg';
import BuyIcon from '../assets/BuyIcon.svg';
import SearchIcon from '../assets/SearchIcon.svg';
import {Link} from "react-router-dom"


const Header = () => {
  return (
   <header>
    <div>
        <nav class="navbar">
        <Link to="/" className="logo-home"><img src={logo} alt="logo"/></Link>
            <div class="navbar__container-btn">
            <img class='search-icon' src={SearchIcon} alt="#"/>
            <input class="navbar__input" type="text" img={SearchIcon}  placeholder='Buscar producto...'  />
            <button class="navbar__btn-search">Buscar</button>
            </div>
            <div class="buttons__fav-buy">
                <Link to="/Favoritos">
                    <button className="btn-fav">
                        <img className="fav-icon" src={FavIcon} alt="Favorite"/>
                    </button>
                </Link>
                <Link to="/Shopping">
                    <button className="btn-buy">
                        <img className="fav-buy" src={BuyIcon} alt="Buy"/>
                    </button>
                </Link>
            </div>
        </nav>  
    </div>
    <div class="sections">
        <Link to="/Moviles" className="links">Móviles</Link>
        <Link to="/Laptop" className="links">Laptop</Link>
        <Link to="/Accesorios" className="links">Accesorios</Link>
    </div>
   </header>

  )
};

export default Header;











