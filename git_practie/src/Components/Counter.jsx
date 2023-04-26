/*import React from 'react'
import {useState} from 'react';
export default function Counter({ render }) {
    const [count, setCount] = useState(0);
  
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleDecrement = () => {
      setCount(count - 1);
    };
  
    return (
      <div>
        <p>Count: {count}</p>
        {render({ handleIncrement, handleDecrement })}
      </div>
    );
  }
  */
 
import React ,{useState} from 'react';
const Counter =(Wrapped,num)=>{
  function Counter(props){
    const [count,setCount]=useState(0)
    function increment()
    {
      setCount(count+num)
    }
    return(
      <div>
        <Wrapped count={count} increment={increment} {...props}/>
      </div>
    )
  }
  return Counter
}
export default Counter ;