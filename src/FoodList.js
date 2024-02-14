// FoodList.js
import React from 'react';
import './Foodlist.css'; 

function FoodList({ foods }) {
  const addToCart = (itemName, itemId) => {
    
    console.log(Added ${itemName} (ID: ${itemId}) to cart);
  };

  return (
    <div className="food-list">
      {foods.map(food => (
        <div key={food.id} className="food-tile">
          <h2>{food.name}</h2>
          <p>Cuisine: {food.cuisine}</p>
          <p>Rating: {food.rating}</p>
          <div className="menu-items">
            {food.menu.map(item => (
              <div key={item.id} className="menu-item">
                <img src={item.imageUrl} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <button onClick={() => addToCart(item.name, item.id)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
          <a href={food.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
      ))}
    </div>
  );
}

export default FoodList;