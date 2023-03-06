import React from 'react';

const Products = ({ products, addToCart }) => {
  return (
    <>
      <h1>Ürünler</h1>
      <div className="products">
        {products.map(({ name, price }) => (
          <Product key={name} name={name} price={price} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
};

export default Products;
