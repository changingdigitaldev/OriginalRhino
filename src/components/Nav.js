import React from 'react';

export default function Nav() {
	return (
		<React.Fragment>
			<nav className="t-or-ms1-mh-nav js-nav">
				<div className="t-or-ms1-mh-nav-r1">
					<ul>
						<li><a href="">HOME</a></li>
						<li><a href="">ABOUT</a></li>
						<li><a href="">SERVICES</a></li>
						<li><a href="">OUR WORK</a></li>
						<li><a href="">NEWS & INSIGHTS</a></li>
						<li><a href="">EVENTS</a></li>
						<li><a href="">CONTACT</a></li>
						<li><a href="">CAREERS</a></li>
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