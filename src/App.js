import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pardhu from './Pardhu';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import CC from './Class';

function App() {
  return (
    <div>
    
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Nakhul' element={<Pardhu/>}/>
     <Route path='/Login' element={<Login/>}/>
     <Route path='/Reg' element={<Registration/>}/>
     <Route path='/class' element={<CC/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}
export default App;


// import React from 'react';
// function Greeting(props) {
//   return <h1>Hello, {props.name}!</h1>;}
// function App() {
//   return <Greeting name="John" />; }





// import React, { useState } from 'react';
// function Counter() {
// const [count, setCount] = useState(0);
// return (
// <div>
// <p>You clicked {count} times</p>
// <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Click me</button>
// </div>
// );
// }
// export default Counter;



































































