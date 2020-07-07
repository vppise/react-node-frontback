import React from 'react';
import { Link } from 'react-router-dom';
// import StudentData from './StudentData';


 const Navbar = () => {
    return (
        <div>
        <nav>
    <div className="nav-wrapper">
      {/* <a href="/" className="center brand-logo">Student KYC</a> */}
      <Link to='/' className="center brand-logo">Student KYC</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/students'>Student's Data</Link></li>
      </ul>
    </div>
  </nav>
        </div>
    )
}


export default Navbar;