import React from 'react';

// images
import iconFun from '../images/career/icon-fun.svg'
import iconEnergetic from '../images/career/icon-energetic.svg'
import iconDifferent from '../images/career/icon-different.svg'
import iconTalking from '../images/career/icon-talking.svg'

class Values extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="t-or-ms1-mh-value fadein">
					<div className="t-or-ms1-mh-container">
						<div className="t-or-ms1-mh-value-r1">
							<h2 className="t-or-ms1-mh-section-heading">Values</h2>
						</div>
						<div className="t-or-ms1-mh-value-r2">
							<ul>
								<li>
									<span style={{backgroundImage: `url(${iconFun})`}}></span>
									<p>Fun</p>
								</li>
								<li>
									<span style={{backgroundImage: `url(${iconEnergetic})`}}></span>
									<p>Energetic</p>
								</li>
								<li>
									<span style={{backgroundImage: `url(${iconDifferent})`}}></span>
									<p>Different</p>
								</li>
								<li>
									<span style={{backgroundImage: `url(${iconTalking})`}}></span>
									<p>Straight-Talking</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Values;