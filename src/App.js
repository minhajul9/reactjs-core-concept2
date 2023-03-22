import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const products = [
    {name: 'laptop', price: 45000},
    {name: 'mobile', price: 15000},
    {name: 'desktop', price: 60000},
    {name: 'mouse', price: 500},
    {name: 'keyboard', price: 1000},
    {name: 'monitor', price: 13000},
  ]
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  // console.log(abc);
  
  // function to increase counter 
  const increaseCount = () =>setCount(count + 1);
  
  // function to decrease 
  const decreaseCount = () =>setCount(count-1)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}


// function Product(props){
//   return (
//     <div className='container'>
//       <h2>Name: {props.name}</h2>
//       <h3>Job: {props.price}</h3>
//     </div>
//   )
// }

export default App;
