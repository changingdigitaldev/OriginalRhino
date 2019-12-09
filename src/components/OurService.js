import React from 'react';
import ServiceImage from '../images/our-service.png';

class OurService extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="t-or-ms1-mh-our-service">
					<div className="t-or-ms1-mh-container">
						<div className="t-or-ms1-mh-our-service-r1 fadein">
							<img src={ServiceImage} alt=""/>
							<p>We love to create great copy,<br/>
							videos, animations and <br/>
							graphics. We’re damn good at:</p>
						</div>
						<div className="t-or-ms1-mh-our-service-r2 fadein">
							<ul>
								<li><a href="../services/content-marketing/index.html">Content <br/>Marketing</a></li>
								<li><a href="">Sales & Marketing <br/>Collateral</a></li>
								<li><a href="">Viral <br/>Campaigns</a></li>
								<li><a href="">Thought <br/>Leadership</a></li>
								<li><a href="">Corporate <br/>Communications</a></li>
								<li><a href="">Engagement</a></li>
							</ul>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default OurService;