import React from 'react';
import Hero from '../components/Hero'; 

class ContactUs extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var content = {
			classModifier: 't-or-ms1-mh-hero-about',
			pageName: 'About Us',
			text: 'We’re a team of creatives with a passion for great content. Everyone has something to say. Let’s figure out the best way to say it!',
			staticImage: ''
		}

		return (
			<React.Fragment>
				<Hero content={content}/>
			</React.Fragment>
		)
	}
}

export default ContactUs;