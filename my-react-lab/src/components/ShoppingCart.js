import React, { useState } from 'react';


function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleAddItem = () => {
    itemName && itemPrice && setCart([...cart, { name: itemName, price: parseFloat(itemPrice) }]);
    setItemName('');
    setItemPrice('');
  };

  const handleRemoveItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="shopping-cart-container">
        <h1 className="shopping-cart-title">Task 4</h1>
      <h1 className="shopping-cart-title">Shopping Cart</h1>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          className="input-field"
          placeholder="Item Price"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <button className="add-item-button" onClick={handleAddItem}>Add Item</button>
      </div>
      <ul className="cart-list">
        {cart.map((item, index) => (
          <li className="cart-item" key={index}>
            {item.name} - ${item.price.toFixed(2)}{' '}
            <button
              className="remove-item-button"
              onClick={() => handleRemoveItem(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h2 className="total-price">Total: ${calculateTotal()}</h2>
    </div>
  );
}

export default ShoppingCart;

