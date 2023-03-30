import React from "react";
import "./App.css";
import {Link} from 'react-router-dom';
function Nav()
{
    return(
   <div className="App11">
    <nav>
    <Link to='/' className="App9">Home</Link>
    <Link to='/Nakhul' className="App9">Contact Us</Link>
    <Link to='/Login' className="App9">Login</Link>
    <Link to='/Reg' className="App9">Registration</Link>
    <Link to='/class' className="App9">Class Component</Link>
    </nav>
   </div>
    );
}
export default Nav;