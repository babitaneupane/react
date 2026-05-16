import React from 'react'    //rafce(1-9) code snippet

const Counter = () => {
    const [count, setCount] = React.useState(0);
  return (
    <>
    <div className="bg-green-600">
        <h1> count is : {count}
        </h1>
    </div>
    <div>
        <button className="py-3 px-3 bg-amber-600 rounded-2xl mx-4 mt-5"  //mt=margin top, mx=margin x-axis
        onClick={()=> {
            setCount(count + 1);
            }}
        >increase</button>

        <button className="py-3 px-3 bg-amber-600 rounded-2xl mx-4 mt-5"
        onClick={()=> {
            setCount(count - 1);
            }}
        >decrease</button>

        <button className="py-3 px-3 bg-amber-600 rounded-2xl mx-4 mt-5"
        onClick={()=> {
            setCount(0);
            }}
        >Reset</button>
    </div>
    </>
  )
}

export default Counter;