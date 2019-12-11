import React from 'react';

import work01 from '../images/work/work-01.jpg';
import work02 from '../images/work/work-02.jpg';
import work03 from '../images/work/work-03.jpg';

class Records extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="t-or-ms1-mh-record">
					<div className="t-or-ms1-mh-container">
						<div className="t-or-ms1-mh-record-r1 fadein">
							<h2 className="t-or-ms1-mh-section-heading">Case Studies</h2>
							<p>Every project is different. Here is an overview of some of the 
							projects we’ve worked on, and what our clients had to say about us.</p>
						</div>
						<div className="t-or-ms1-mh-search t-or-ms1-mh-search-record fadein">
							<ul>
								<li>All</li>
								<li>Service type <span></span></li>
								<li>Content type <span></span></li>
							</ul>
							<div>
								<fieldset>
									<input type="text" placeholder="Search"/>
									<button></button>
								</fieldset>
								<p>Sort by: <span>A-Z</span></p>
							</div>
						</div>
						<div className="t-or-ms1-mh-record-r2 ">
							<article className="fadein">
								<div style={{backgroundImage: `url(${work01})`}}></div>
								<section>
									<h3 className="t-or-ms1-mh-section-heading">Driving Engagement With Expectant Mum’s For Bargain Hunting Mum</h3>
									<ul>
										<li><a href="">Content Marketing</a></li>
										<li><a href="">Guides</a></li>
									</ul>
									<p>Curabitur congue ante eget vulputate molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris felis, euismod sit amet lorem sed, sagittis blandit tortor auctor nibh.</p>
									<a className="t-or-ms1-mh-button" href="">Read More</a>
								</section>
							</article>
							<article className="fadein">
								<div style={{backgroundImage: `url(${work02})`}}></div>
								<section>
									<h3 className="t-or-ms1-mh-section-heading">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam</h3>
									<ul>
										<li><a href="">Content Marketing</a></li>
										<li><a href="">Guides</a></li>
									</ul>
									<p>Nullam ut cursus turpis, non faucibus urna. Curabitur eu urna imperdiet, venenatis orci quis, sodales velit. Donec ultricies ligula quis arcu laoreet pharetra. Etiam venenatis ultrices.</p>
									<a className="t-or-ms1-mh-button" href="">Read More</a>
								</section>
							</article>
							<article className="fadein">
								<div style={{backgroundImage: `url(${work03})`}}></div>
								<section>
									<h3 className="t-or-ms1-mh-section-heading">Nullam Vulputate Facilisis Posuere Augue Sed Dui Lobortis</h3>
									<ul>
										<li><a href="">Content Marketing</a></li>
										<li><a href="">Guides</a></li>
									</ul>
									<p>Curabitur congue ante eget vulputate molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris felis, euismod sit amet lorem sed, sagittis blandit tortor auctor nibh.</p>
									<a className="t-or-ms1-mh-button" href="">Read More</a>
								</section>
							</article>

							<a href="">load more</a>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Records;