import React from 'react';
import energise from '../images/energise.svg'
import platform1 from '../images/platform-01.png'
import platform2 from '../images/platform-02.png'
import platform3 from '../images/platform-03.png'

export default function platform() {
	return (
		<React.Fragment>
			<div className="t-or-ms1-mh-platfrom fadein">
				<div className="t-or-ms1-mh-container">
					<div className="t-or-ms1-mh-platfrom-r1">
						<h2 className="coverup">We <span><img src={energise} alt=""/></span> 
						Your Content</h2>
						<ul>
							<li>
								<a href="./services/content-marketing/index.html">
									<div>
										<span style={{backgroundImage: `url(${platform1})`}}></span>
									</div>
									<p>Content Marketing <span><i className="icon-angle-right"></i></span></p>
								</a>
							</li>
							<li>
								<a href="">
									<div>
										<span style={{backgroundImage: `url(${platform2})`}}></span>
									</div>
									<p>Sales & Marketing Collateral <span><i className="icon-angle-right"></i></span></p>
								</a>
							</li>
							<li>
								<a href="">
									<div>
										<span style={{backgroundImage: `url(${platform3})`}}></span>
									</div>
									<p>Viral Campaigns <span><i className="icon-angle-right"></i></span></p>
								</a>
							</li>
						</ul>
					</div>
					<div className="t-or-ms1-mh-platfrom-r2">
						<ul>
							<li className="is-active"></li>
							<li></li>
						</ul>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}