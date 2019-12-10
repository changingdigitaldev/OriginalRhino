import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

class Offer extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="t-or-ms1-mh-offer">
					<div className="t-or-ms1-mh-container">
						<div className="t-or-ms1-mh-offer-r1">
							<h2 className="t-or-ms1-mh-section-heading">What We Offer</h2>
						</div>
						<div className="t-or-ms1-mh-offer-r2">
							<OwlCarousel
								loop
								dots
								autoplay
								items={3}
								rewind
							>
									<section>
										<span>01.</span>
										<h3>A Bonus for You</h3>
										<p>We want to see you grow. That’s why we have a learning & development budget for books, courses or conferences.</p>
									</section>
								
									<section>
										<span>02.</span>
										<h3>A Bonus for You</h3>
										<p>We want to see you grow. That’s why we have a learning & development budget for books, courses or conferences.</p>
									</section>
								
									<section>
										<span>03.</span>
										<h3>A Bonus for You</h3>
										<p>We want to see you grow. That’s why we have a learning & development budget for books, courses or conferences.</p>
									</section>
								
									<section>
										<span>04.</span>
										<h3>A Bonus for You</h3>
										<p>We want to see you grow. That’s why we have a learning & development budget for books, courses or conferences.</p>
									</section>
								
									<section>
										<span>05.</span>
										<h3>A Bonus for You</h3>
										<p>We want to see you grow. That’s why we have a learning & development budget for books, courses or conferences.</p>
									</section>
								
									<section>
										<span>06.</span>
										<h3>A Bonus for You</h3>
										<p>We want to see you grow. That’s why we have a learning & development budget for books, courses or conferences.</p>
									</section>
							</OwlCarousel>



						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Offer;