import React from 'react';

// images
import webinar from '../images/events/webinar.jpg';
import meetup from '../images/events/meetup.jpg';
import conferrence from '../images/events/conferrence.jpg';

class UpcomingEvent extends React.Component {
	render() { 
		return (
			<React.Fragment>
				<div className="t-or-ms1-mh-upcoming">
					<div className="t-or-ms1-mh-container">
						<div className="t-or-ms1-mh-upcoming-r1 fadein">
							<h2 className="t-or-ms1-mh-section-heading">Upcoming Events</h2>
							<p>Join us to chat all things content creation!</p>
						</div>
						<div className="t-or-ms1-mh-search t-or-ms1-mh-search-upcoming fadein">
							<ul>
								<li>All</li>
								<li>webinars</li>
								<li>meet ups</li>
								<li>conferences</li>
							</ul>
							<div>
								<fieldset>
									<input type="text" placeholder="Search"/>
									<button></button>
								</fieldset>
								<p>Sort by: <span>Most Recent</span></p>
							</div>
						</div>
						<div className="t-or-ms1-mh-upcoming-r2 fadein">
							<section className="t-or-ms1-mh-schedule">
								<div className="t-or-ms1-mh-schedule-r1">
									<div className="t-or-ms1-mh-schedule-c1">
										<p>SEP</p>
										<span>14</span>
									</div>
									<div className="t-or-ms1-mh-schedule-c2" style={{backgroundImage: `url(${webinar})`}}></div>
								</div>
								<div className="t-or-ms1-mh-schedule-r2">
									<h2>How To Create An Attention Grabbing Showreel</h2>
									<span>Webinar</span>
									<time>10:00 GMT</time>
									<ul>
										<li><a href="">Learn More</a></li>
										<li><a href="">Register Free</a></li>
									</ul>
								</div>
							</section>
							<section className="t-or-ms1-mh-schedule">
								<div className="t-or-ms1-mh-schedule-r1">
									<div className="t-or-ms1-mh-schedule-c1">
										<p>OCT</p>
										<span>17</span>
									</div>
									<div className="t-or-ms1-mh-schedule-c2" style={{backgroundImage: `url(${meetup})`}}></div>
								</div>
								<div className="t-or-ms1-mh-schedule-r2">
									<h2>Content Marketing London #6</h2>
									<span>meet up</span>
									<p>Lake District National Park, UK</p>
									<time>18:00 GMT</time>
									<ul>
										<li><a href="">Learn More</a></li>
										<li><a href="">Register Free</a></li>
									</ul>
								</div>
							</section>
							<section className="t-or-ms1-mh-schedule">
								<div className="t-or-ms1-mh-schedule-r1">
									<div className="t-or-ms1-mh-schedule-c1">
										<p>OCT</p>
										<span>23</span>
									</div>
									<div className="t-or-ms1-mh-schedule-c2" style={{backgroundImage: `url(${conferrence})`}}></div>
								</div>
								<div className="t-or-ms1-mh-schedule-r2">
									<h2>Content Marketing Expo</h2>
									<span>Conference</span>
									<p>The Wesley Euston Hotel & Conference Venue</p>
									<time>09:00 GMT</time>
									<ul>
										<li><a href="">Learn More</a></li>
										<li><a href="">Register Free</a></li>
									</ul>
								</div>
							</section>
							<section className="t-or-ms1-mh-schedule">
								<div className="t-or-ms1-mh-schedule-r1">
									<div className="t-or-ms1-mh-schedule-c1">
										<p>NOV</p>
										<span>03</span>
									</div>
									<div className="t-or-ms1-mh-schedule-c2" style={{backgroundImage: `url(${conferrence})`}}></div>
								</div>
								<div className="t-or-ms1-mh-schedule-r2">
									<h2>Video Marketing World Conference</h2>
									<span>Conference</span>
									<p>BMA House Conference & Events Venue</p>
									<time>10:00 GMT</time>
									<ul>
										<li><a href="">Learn More</a></li>
										<li><a href="">Register Free</a></li>
									</ul>
								</div>
							</section>
							<section className="t-or-ms1-mh-schedule">
								<div className="t-or-ms1-mh-schedule-r1">
									<div className="t-or-ms1-mh-schedule-c1">
										<p>DEC</p>
										<span>18</span>
									</div>
									<div className="t-or-ms1-mh-schedule-c2" style={{backgroundImage: `url(${webinar})`}}></div>
								</div>
								<div className="t-or-ms1-mh-schedule-r2">
									<h2>How To Write Interesting Content</h2>
									<span>Webinar</span>
									<time>10:00 GMT</time>
									<ul>
										<li><a href="">Learn More</a></li>
										<li><a href="">Register Free</a></li>
									</ul>
								</div>
							</section>
						</div>
						<div className="t-or-ms1-mh-upcoming-r3">
							<a href="">load more</a>
						</div>
					</div>
				</div>

			</React.Fragment>
		)
	}
}

export default UpcomingEvent;

