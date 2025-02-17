import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Count()
{
    const [ count,setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
      }function decriment() {
        setCount(count - 1);
      }
      function reset() {
        setCount(0);
      }

    return(
 <div>
     <h1 style={{marginLeft:'42%'}}>Counter</h1>
     <h2  style={{marginLeft:'45%'}}>{count}</h2>
        <Button variant="Secoundary" onClick={handleClick} style={{backgroundColor:'blue',color:'white',marginLeft:'40%'}}>+</Button>
        <Button variant="success" onClick={reset} style={{backgroundColor:'red',color:'white',marginLeft:'2%'}}>Reset</Button>
        <Button variant="success" onClick={decriment} style={{backgroundColor:'green',color:'white',marginLeft:'2%'}}>-</Button>
 </div>
    )
      
}
export default Count