import React from 'react';
import Copyright from './Copyright'; 
import logo from '../images/company-logo-footer.svg';

export default function Footer() {
	return (
		<React.Fragment>
			<footer className="t-or-ms1-mh-footer">
				<div className="t-or-ms1-mh-container">
					<div className="t-or-ms1-mh-footer-r1">
						<div className="t-or-ms1-mh-footer-r1c1"> 
							<h2>
								<a href="#">
									<img src={logo} alt=""/>
								</a>
							</h2>
							<ul>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Terms</a></li>
								<li><a href="#">Privacy</a></li>
								<li><a href="#">Cookie</a></li>
							</ul>
						</div>
						<div className="t-or-ms1-mh-footer-r1c2">
							<h2><a href="#"><img src={logo} alt=""/></a></h2>
							<h3>Subscribe To Our Newsletter</h3>
							<form action="">
								<input type="email" placeholder="Your Email Address"/>
								<button><i className="icon-airplane"></i></button>
							</form>
						</div>
					</div>
				</div>
			</footer>
			<Copyright/>
		</React.Fragment>
	)
}