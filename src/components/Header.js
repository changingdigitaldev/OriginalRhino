import React from 'react';
import Nav from '../components/Nav';
import logo from '../images/comp-logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
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
              <div className="t-or-ms1-mh-header-c2 js-menu" onClick={this.toggleClass}>
                <span></span>
                <span></span> 
                <span></span>
              </div>
            </div>
          </div>
        </header>
        <Nav 
        isActive={this.state.isActive} />
      </React.Fragment>
    );
  }
} 

export default Header;