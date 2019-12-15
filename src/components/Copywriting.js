import React, {Component} from 'react';

import copywriting from '../images/news/copywriting.jpg';

export default class Copywriting extends Component {
	render() {
		return (
			<div className="t-or-ms1-mh-copywriting">
				<div className="t-or-ms1-mh-container">
					<div className="t-or-ms1-mh-copywriting-r1">
						<ul>
							<li>
								<section>
									<img src={copywriting} alt=""/>
									<h2 className="t-or-ms1-mh-section-heading">The Ultimate Guide To <br className="show-pc"/>
									Copywriting</h2>
									<p>Donec id magna commodo, tristique nulla vitae, mollis sapien. <br className="show-pc"/>
									Suspendisse urna urna, varius a egestas at, consequat et ipsum. <br className="show-pc"/>
									Ut blandit tortor velit, sit amet accumsan orci mattis vel.</p>
									<ul>
										<li>Vivamus pellentesque nibh lacus, et mattis eros pharetra <br className="show-pc"/>
										eu placerat rhoncus metus, id ullamcorper metus elementum</li>
										<li>Sed ac arcu id ante faucibus euismod. Donec id magna</li>
										<li>Phasellus ultricies lacus nec orci varius gravida. Suspendisse <br className="show-pc"/>
										potenti vel justo tellus finibus dignissim.</li>
									</ul>
									<a className="t-or-ms1-mh-button" href="">Get the Guide</a>
								</section>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}