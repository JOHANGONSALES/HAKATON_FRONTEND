import React, { useState } from 'react';
import "./Card.css"
import IconFavDefault from "../assets/icon-fav-default.svg"
import IconFavPressed from "../assets/icon-fav-pressed.svg"
import IconComprDefault from "../assets/icon-shop-default.svg"
import IconComprPressed from "../assets/icon-shop-pressed.svg"

const json = [
    {
      "id": 1,
      "name": "Producto 1",
      "price": 19.99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "image": "https://source.unsplash.com/random/300x200"
    },
    {
      "id": 2,
      "name": "Producto 2",
      "price": 24.99,
      "description": "Nulla facilisi. Sed dapibus tellus vitae congue laoreet.",
      "image": "https://source.unsplash.com/random/300x200"
    },
    {
      "id": 3,
      "name": "Producto 3",
      "price": 15.99,
      "description": "Aenean a orci nec augue finibus venenatis.",
      "image": "https://source.unsplash.com/random/300x200"
    },
    
  ]; // Tu array de datos aquí

export default function Card () {
  const [favorites, setFavorites] = useState(json.map(() => false));
  const [purchaseStatus, setPurchaseStatus] = useState(json.map(() => false));
  
  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  const togglePurchase = (index) => {
    const newPurchases = [...purchaseStatus];
    newPurchases[index] = !newPurchases[index];
    setPurchaseStatus(newPurchases);
  };

  return (
    <ul className="card-list">
      {json.map((card, index) => (
          <div className='container-card'>
            <li key={card.id}>
              <img className="img-product" src={card.image} alt="" />
              <div className='container-txt'>
                <h4>{card.name}</h4>
                <p className='description'>{card.description}</p>
                <p className='price'>{card.price}</p>
              </div>
              <div className='container-btn-card'>
                <button className= "fav-btn" onClick={() => toggleFavorite(index)}>
                  <img
                  style={{ cursor: 'pointer' }}
                  src={favorites[index] ? IconFavDefault : IconFavPressed}
                  alt="heart"
                  />
                </button>

                <button className= "shop-btn" onClick={() => togglePurchase(index)}>
                  <img
                  style={{ cursor: 'pointer' }}
                  src={favorites[index] ? IconComprDefault : IconComprPressed}
                  alt="heart"
                  />
                </button>
              </div>

            </li>
        </div>
      ))}
    </ul>
  );
};

