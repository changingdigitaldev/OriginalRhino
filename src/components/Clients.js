import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import logo1 from '../images/client-logo1.png'
import logo2 from '../images/client-logo2.png'
import logo3 from '../images/client-logo3.png'
import logo4 from '../images/client-logo4.png'

export default function Clients() {
	return (
		<React.Fragment>
			<div className="t-or-ms1-mh-clients">
				<div className="t-or-ms1-mh-container">
					<div className="t-or-ms1-mh-clients-r1">
						<h2>Our Clients</h2>
							<ul className="js-owl-carousel-logo">
								<OwlCarousel
									loop
									dots
									autoplay
									items={4}
									rewind
								>
									<section><img src={logo1} alt=""/></section>
									<section><img src={logo2} alt=""/></section>
									<section><img src={logo3} alt=""/></section>
									<section><img src={logo4} alt=""/></section>
									<section><img src={logo1} alt=""/></section>
									<section><img src={logo2} alt=""/></section>
									<section><img src={logo3} alt=""/></section>
									<section><img src={logo4} alt=""/></section>
									<section><img src={logo1} alt=""/></section>
									<section><img src={logo2} alt=""/></section>
									<section><img src={logo3} alt=""/></section>
									<section><img src={logo4} alt=""/></section>
									</OwlCarousel>
							</ul>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}