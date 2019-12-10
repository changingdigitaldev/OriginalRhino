import React from 'react';

class Nav extends React.Component {
	render () { 
		return (
			<React.Fragment>
				<nav className={`t-or-ms1-mh-nav ${this.props.isActive ? 'is-active' : ''}`}>
					<div className="t-or-ms1-mh-nav-r1">
						<ul>
							<li><a href="/">HOME</a></li>
							<li><a href="/about">ABOUT</a></li>
							<li><a href="/services">SERVICES</a></li>
							<li><a href="">OUR WORK</a></li>
							<li><a href="">NEWS & INSIGHTS</a></li>
							<li><a href="">EVENTS</a></li>
							<li><a href="">CONTACT</a></li>
							<li><a href="/career">CAREERS</a></li>
						</ul>
					</div>
					<div className="t-or-ms1-mh-nav-r2">
						<ul>
							<li><a href=""><i className="icon-facebook"></i></a></li>
							<li><a href=""><i className="icon-twitter"></i></a></li>
							<li><a href=""><i className="icon-instagram"></i></a></li>
							<li><a href=""><i className="icon-linkedin"></i></a></li>
						</ul>
					</div>
				</nav>
			</React.Fragment>
		)
	}
}

export default Nav;