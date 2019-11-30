import React from 'react';

export default function Quote() {
	return (
		<React.Fragment>
			<div className="t-or-ms1-mh-quote">
				<div className="t-or-ms1-mh-container">
					<div className="t-or-ms1-mh-quote-r1">
						<div className="t-or-ms1-mh-quote-c1">
							<h2>Need A Quote For 
							A Project?</h2>
							<p>Do you have a project you would like us to work on? 
							Or perhaps a few questions? Contact us and we will 
							be more than happy to help.</p>
						</div>

						<div className="t-or-ms1-mh-quote-c2">
							<h3>Get in Touch</h3>
							<ul>
								<li><i className="icon-mail"></i><a href="">hello@originalrhino.com</a></li>
								<li><i className="icon-phone"></i>+12 34 5678 9001</li>
								<li><i className="icon-location"></i>Lorem Ipsum St. Sit Amet Dolor Dignissim 
								A Mauris In Egestas Turpis</li>
							</ul>
						</div>

						<div className="t-or-ms1-mh-quote-c3">
							<form action="#">
								<fieldset>
									<input type="text" placeholder="first name"/>
									<label>first name</label>
								</fieldset>
								<fieldset>
									<input type="text" placeholder="last name"/>
									<label>last name</label>
								</fieldset>
								<fieldset>
									<input type="text" placeholder="email"/>
									<label>email</label>
								</fieldset>
								<fieldset>
									<input type="text" placeholder="company"/>
									<label>company</label>
								</fieldset>
								<fieldset>
									<input type="text" placeholder="your inquery"/>
									<label>your inquery</label>
								</fieldset>
								<input type="checkbox" id="quote-checkbox"/>
								<label htmlFor="quote-checkbox">Join our mailing list.</label>
								<button className="t-or-ms1-mh-button t-or-ms1-mh-button-submit">submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}