import React from 'react';
import Nav from '../components/Nav';
import logo from '../images/comp-logo.svg';

export default function Header() {
  return (
    <React.Fragment>
      <header className="t-or-ms1-mh-header">
        <div className="t-or-ms1-mh-container">
          <div className="t-or-ms1-mh-header-inner">
            <div className="t-or-ms1-mh-header-c1">
              <a href="#">
                <img src={logo} alt=""/>
              </a>
            </div>
            <div className="t-or-ms1-mh-header-c2 js-menu">
              <span></span>
              <span></span> 
              <span></span>
            </div>
          </div>
        </div>
      </header>
      <Nav/>
    </React.Fragment>
  );
}
