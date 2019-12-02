import React from 'react';
import illustration1 from '../images/about-illustration-01.png'
import illustration2 from '../images/about-illustration-02.png'
import illustration3 from '../images/about-illustration-03.png'

class AboutContent extends React.Component {
	render () {
		return (
			<React.Fragment>
				<div className="t-or-ms1-mh-about-content">
					<div className="t-or-ms1-mh-container">
						<div className="t-or-ms1-mh-about-content-r1">
							<section className="fadein">
								<img src={illustration1} alt=""/>
								<p>We supercharge your content by boiling it right down to your core message and goal. Then we put it back together in the most engaging way possible.</p>
							</section>
							<section className="fadein">
								<img src={illustration2} alt=""/>
								<p>To create the best content, we need to understand your message, style and tone of voice. The first project always takes the longest as it is how we get to know you.</p>
							</section>
							<section className="fadein">
								<img src={illustration3} alt=""/>
								<p>We want to capture the hearts and minds of your audience by humanising you and your message. Let’s activate emotions in your customer, whether you want to amaze, excite, shock or amuse! We need to be more human.</p>
							</section>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default AboutContent;