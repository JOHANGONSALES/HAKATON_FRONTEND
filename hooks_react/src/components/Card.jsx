import React, { useState } from 'react';
import "./Card.css"
import IconFavDefault from "../assets/icon-fav-default.svg"
import IconFavPressed from "../assets/icon-fav-pressed.svg"
import IconComprDefault from "../assets/icon-compra-default.svg"
import IconComprPressed from "../assets/icon-compra-pressed.svg"

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
    {
      "id": 4,
      "name": "Producto 4",
      "price": 29.99,
      "description": "Vestibulum malesuada justo vitae mi maximus, id facilisis ex finibus.",
      "image": "https://source.unsplash.com/random/300x200"
    },
    {
      "id": 5,
      "name": "Producto 5",
      "price": 12.99,
      "description": "Phasellus dignissim metus eget lectus elementum, vel rhoncus odio aliquam.",
      "image": "https://source.unsplash.com/random/300x200"
    },
    {
      "id": 6,
      "name": "Producto 6",
      "price": 39.99,
      "description": "Cras vel nibh tincidunt, vulputate arcu nec, facilisis odio.",
      "image": "https://source.unsplash.com/random/300x200"
    },
    {
      "id": 7,
      "name": "Producto 7",
      "price": 22.99,
      "description": "Fusce tempus eros et felis volutpat tristique.",
      "image": "https://source.unsplash.com/random/300x200"
    },
    {
      "id": 8,
      "name": "Producto 8",
      "price": 17.99,
      "description": "Donec ultrices quam eu nisi commodo congue.",
      "image": "https://source.unsplash.com/random/300x200"
    },
    {
      "id": 9,
      "name": "Producto 9",
      "price": 31.99,
      "description": "Suspendisse nec ligula ultricies, fermentum purus quis, cursus lectus.",
      "image": "https://source.unsplash.com/random/300x200"
    },
    {
      "id": 10,
      "name": "Producto 10",
      "price": 27.99,
      "description": "Vivamus eu neque vel ex fermentum faucibus.",
      "image": "https://source.unsplash.com/random/300x200"
    }
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
    <ul>
      {json.map((card, index) => (
          <div className='container-card'>
            <li key={card.id}>
              <img className="img-product" src={card.image} alt="" />
              <h4>{card.name}</h4>
              <p>{card.description}</p>
              <p>{card.price}</p>
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

