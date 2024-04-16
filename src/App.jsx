import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const products = [
    { id: 1, name: 'i phone 14 pro max', price: 1891.53, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6Xc2pTseWbH48dOQkIGNlRLcExWKZIfP4A&usqp=CAU' },
    { id: 2, name: 'samsung s22 ultra', price: 1017.64, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupdqsUI_5do2wD4-RVtyY1pTJV8ROYr2IFw&usqp=CAU' },
    { id: 3, name: 'apple macbook pro', price: 1556.53, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFKWblQ6Np0rtlM8uEEu7TyN0Pk45mFQdIw&usqp=CAU' },
    { id: 4, name: 'hp elitebook', price: 1089.53, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYTuuhdX6tbwOvey9j-c08Z8arlgVrwVhEZg&usqp=CAU' },
    { id: 5, name: '1+ earphones', price: 59.86, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_ZUosrtdvDkCZdG5zSQzfuAUGnpxMb23tw&usqp=CAU' },
    { id: 6, name: 'Appl I watch', price: 71.83, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49OLydw7sXyqRfYlT_IctBvKkWBETnohH1Q&usqp=CAU' },
    { id: 7, name: 'otto shirt', price: 23.94, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPfM9edmZxpa7_UfZLb3XyzSvUqKl1AdVXdw&usqp=CAU' },
    { id: 8, name: 'otto pants', price: 29.93, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14B-HznyrihUvcZURLcz1tsvQ7lkoTa_H4Lbamwn5FB3ra4lNQUIq8uOOMgbIcSSOhWc&usqp=CAU' },
    // Add more products as needed
  ];

  const addToCart = (productId) => {
    setCartItems([...cartItems, productId]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item !== productId));
  };

  return (
    <div className="shopping-cart">
      <h1>Shop in style</h1>
      <h2>With this shop hompeage template</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>No of product in cart.</p>
        ) : (
          <ul>
            {cartItems.map((itemId) => (
              <li key={itemId}>
                {products.find(product => product.id === itemId).name} - ${products.find(product => product.id === itemId).price}
                <button onClick={() => removeFromCart(itemId)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <h2>Available Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;