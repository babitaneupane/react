import React, { useEffect } from 'react';

const Fetch = () => {
  useEffect(() => {
    async function fetchproducts() {
      const response = await fetch('https://fakestoreapi.com/products/1');
      const data = await response.json();
      console.log(data);
    

  }
  fetchproducts();
},[]);
  return (
  <>
  <div>hello  </div>
  </>
  );
};

export default Fetch;