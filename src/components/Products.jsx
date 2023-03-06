import React from 'react';
import Product from './Product';


const Products = ({ products, addToCart }) => {
  console.log(products)
  return (
    <>
      <h1>Ürünler</h1>
      <div className="products">
        {products?.map(({ name, price }) => (
          <Product key={name} name={name} price={price} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
};

export default Products;
