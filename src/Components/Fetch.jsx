import React from 'react'

const Fetch = () => {
    const api = fetch("https://fakestoreapi.com/products/1");
    const res =await api.json();
    console.log(res);
  return 
    <div>Fetch</div>;
  
};

export default Fetch;