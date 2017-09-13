import React from 'react';

//converted to functional component 
function Square(props){
  return (
    <button className="square" onClick={()=> props.onClick()}>
       {props.value}
    </button>
  )
}

export default Square;