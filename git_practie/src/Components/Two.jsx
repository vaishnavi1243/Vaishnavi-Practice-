import React from 'react';
import Counter from './Counter';
function Two(props){
    const {count,increment,name}=props
    return(
        <div>
            <button onMouseOver={increment}>Click {name} {count}</button>
        </div>
    )
}
export default Counter(Two,5);