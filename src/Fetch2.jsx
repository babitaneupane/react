import React, { useEffect, useState } from 'react';

const Fetch2 = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProduct(data);
    }

    fetchProducts();
  }, []);
  return (
  <>
  <div>products </div>
  <div>
    {product.map((products)=>(
        <div key={products.id}>
            <div>{products.title}</div>
            <div>{products.category}</div>
        </div>
   )) }

  </div>
  </>
  );
};

export default Fetch2;