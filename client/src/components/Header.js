import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    // Header//
    <header className="header">
      <div className="header_overlay" />
      <div className="header_content d-flex flex-row align-items-center justify-content-start">
        <div className="logo">
          <Link to="/">
            <div className="d-flex flex-row align-items-center justify-content-start">
              <div><img src="images/logo_1.png" alt="logo" /></div>
              <div>704 Yard Sale</div>
            </div>
          </Link>
        </div>
        <div className="hamburger"><i className="fa fa-bars" aria-hidden="true" /></div>
        <nav className="main_nav">
          <ul className="d-flex flex-row align-items-start justify-content-start">
            <li className="active"><Link to="/YardPost">Post Your Sale</Link></li>
            <li><Link to="/YardSaleList">Find a Yard Sale</Link></li>
            <li><Link to="/YardSave">Saved Yard Sales</Link></li>
            <li><Link to="/About">About</Link></li>
          </ul>
        </nav>
        <div className="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
          {/* Search */}
          <div className="header_search">
            <form action="#" id="header_search_form">
              <input type="text" className="search_input" placeholder="Search Item" required="required" />
              <button className="header_search_button"><img src="images/search.png" alt="search" /></button>
            </form>
          </div>
          {/* User */}
          <div className="user"><Link to="/Login">
            <div><img src="images/user.svg" alt="https://www.flaticon.com/authors/freepik" />
              <div>1</div>
            </div>
          </Link></div>
        </div>
      </div>
    </header>


  );

}

export default Header;