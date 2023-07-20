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
    <div class="sections">
        <span> Moviles </span>
        <span> Laptop </span>
        <span> Accesorios </span>
    </div>
   </header>

  )
};

export default Header;








/* import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/images/logo.svg';
import FavIcon from '../assets/images/FavIcon.svg';
import BuyIcon from '../assets/images/BuyIcon.svg';
import SearchIcon from '../assets/images/SearchIcon.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 590);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div>
        <nav className={`navbar ${isMenuOpen ? 'navbar--open' : ''}`}>
          <img src={logo} alt="logo" />
          {isMobileView && (
            <div className={`menu-icon ${isMenuOpen ? 'menu-icon--open' : ''}`} onClick={handleMenuToggle}>
              <div className="menu-icon__bar" />
              <div className="menu-icon__bar" />
              <div className="menu-icon__bar" />
            </div>
          )}

          
          {(!isMobileView || (isMobileView && isMenuOpen)) && (
            <div className="navbar__container-btn">
              {!isMobileView && (
                <>
                  <img className="search-icon" src={SearchIcon} alt="#" />
                  <input className="navbar__input" type="text" placeholder="Buscar producto..." />
                  <button className="navbar__btn-search">Buscar</button>
                  <div className="buttons__fav-buy">
                    <button className="btn-fav">
                      <img className="fav-icon" src={FavIcon} alt="Favorite" />
                    </button>
                    <button className="btn-buy">
                      <img className="fav-buy" src={BuyIcon} alt="Buy" />
                    </button>
                  </div>
                </>
              )}
              {isMobileView && isMenuOpen && (
                <ul className="menu-options">
                  <li>
                    Carrito <img src={BuyIcon} alt="" />
                  </li>
                  <li>
                    Favoritos <img src={FavIcon} alt="" />
                  </li>
                  <li>
                    <input className="navbar__input" type="text" placeholder="Buscar producto..." />
                    <button className="navbar__btn-search">Buscar</button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header; */


