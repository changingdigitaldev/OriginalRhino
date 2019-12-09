import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

class Format extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="t-or-ms1-mh-format">
					<div className="t-or-ms1-mh-container">
						<div className="t-or-ms1-mh-format-r1">
							<h2>And What Format Do You Need?</h2>
							<OwlCarousel
								dots
								autoplay
								items={3}
								rewind
							>
								<section>
									<h3>Articles</h3>
									<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
								</section>
								<section>
									<h3>Documents</h3>
									<p>Integer cursus, purus ac euismod ornare, nisl arcu laoreet lectus, quis molestie massa lectus bibendum lacus odio sem. </p>
								</section>
								<section>
									<h3>Slides</h3>
									<p>Mauris porta vehicula lorem, id vestibulum tortor dictum nec. Integer ultrices feugiat auctor sapien porta.</p>
								</section>
								<section>
									<h3>Articles</h3>
									<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
								</section>
								<section>
									<h3>Documents</h3>
									<p>Integer cursus, purus ac euismod ornare, nisl arcu laoreet lectus, quis molestie massa lectus bibendum lacus odio sem. </p>
								</section>
								<section>
									<h3>Slides</h3>
									<p>Mauris porta vehicula lorem, id vestibulum tortor dictum nec. Integer ultrices feugiat auctor sapien porta.</p>
								</section>
								<section>
									<h3>Articles</h3>
									<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
								</section>
								<section>
									<h3>Documents</h3>
									<p>Integer cursus, purus ac euismod ornare, nisl arcu laoreet lectus, quis molestie massa lectus bibendum lacus odio sem. </p>
								</section>
								<section>
									<h3>Slides</h3>
									<p>Mauris porta vehicula lorem, id vestibulum tortor dictum nec. Integer ultrices feugiat auctor sapien porta.</p>
								</section>
							</OwlCarousel>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Format;