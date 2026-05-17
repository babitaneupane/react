import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
     setTimeout(() => {
      setCount((Count) => Count + 1);
    }, 1000);
  },[]);



  return (
    <>
    <div>
      <h1>I've rendered {count} times!</h1>;
    </div>
    </>
  );
}

export default UseEffectHook;