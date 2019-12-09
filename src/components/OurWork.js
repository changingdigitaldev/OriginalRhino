import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';


class OurWork extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="t-or-ms1-mh-our-work">
					<div className="t-or-ms1-mh-container">
						<div className="t-or-ms1-mh-our-work-r1">
							<h2 className="t-or-ms1-mh-section-heading t-or-ms1-mh-section-heading-our-work">What Content Do You Need?</h2>
							<p>Whatever content you need, let us worry about telling your story.
							Our work includes:</p>
						</div>
						<div className="t-or-ms1-mh-our-work-r2 fadein">
							<OwlCarousel
								loop
								dots
								autoplay
								items={4}
								rewind
							>
								<section>
									<a href="">
										<span className="sprite sprite-icon-01"></span>
										Company Overviews
									</a>
									<a href="">
										<span className="sprite sprite-icon-05"></span>
										Case Studies
									</a>
								</section>
								<section>
									<a href="">
										<span className="sprite sprite-icon-02"></span>
										Product & Services <br/>Overviews
									</a>
									<a href="">
										<span className="sprite sprite-icon-06"></span>
										Showcases & Showreels
									</a>
								</section>
								<section>
									<a href="">
										<span className="sprite sprite-icon-03"></span>
										Explainers
									</a>
									<a href="">
										<span className="sprite sprite-icon-07"></span>
										Opinion & Thought Pieces
									</a>
								</section>
								<section>
									<a href="../services/guides/index.html">
										<span className="sprite sprite-icon-04"></span>
										Guides
									</a>
									<a href="">
										<span className="sprite sprite-icon-08"></span>
										Research
									</a>
								</section>
								<section>
									<a href="">
										<span className="sprite sprite-icon-09"></span>
										Reporting & Fact Sheets
									</a>
									<a href="">
										<span className="sprite sprite-icon-13"></span>
										Entertainment
									</a>
								</section>
								<section>
									<a href="">
										<span className="sprite sprite-icon-10"></span>
										News Updates
									</a>
									<a href="">
										<span className="sprite sprite-icon-14"></span>
										Strategy & Planning
									</a>
								</section>
								<section>
									<a href="">
										<span className="sprite sprite-icon-11"></span>
										Newsletters
									</a>
									<a href="">
										<span className="sprite sprite-icon-15"></span>
										Strategy & Planning
									</a>
								</section>
								<section>
									<a href="">
										<span className="sprite sprite-icon-12"></span>
										Interviews
									</a>
									<a href="">
										<span className="sprite sprite-icon-16"></span>
										Proposals
									</a>
								</section>
							</OwlCarousel>

						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default OurWork; 