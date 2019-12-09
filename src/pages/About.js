import React from 'react';
import AboutContent from '../components/AboutContent'; 
import AboutLearn from '../components/AboutLearn'; 
import Hero from '../components/Hero'; 
import Quote from '../components/Quote'; 

import computer from '../images/hero/about/computer.png'
import idea01 from '../images/hero/about/idea-01.png'
import idea02 from '../images/hero/about/idea-02.png'
import idea03 from '../images/hero/about/idea-03.png'
import person01 from '../images/hero/about/person-01.png'
import person02 from '../images/hero/about/person-02.png'
import person03 from '../images/hero/about/person-03.png'
import plant from '../images/hero/about/plant.png'
import gear01 from '../images/hero/about/gear-01.png'
import gear02 from '../images/hero/about/gear-02.png'
import gear03 from '../images/hero/about/gear-03.png'
import heroabout from '../images/hero/hero-about.svg'

class About extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var content = {
			classModifier: 't-or-ms1-mh-hero-about',
			pageName: 'About Us',
			text: 'We’re a team of creatives with a passion for great content. Everyone has something to say. Let’s figure out the best way to say it!',
			staticImage: heroabout,
			images: [computer, idea03, person01, person02, person03, idea02, idea01, plant, gear03, gear01, gear02]
		}
		return (
			<React.Fragment> 
				<Hero content={content}/>
				<AboutContent/>
				<AboutLearn/>
				<Quote/>
			</React.Fragment>
		)
	}
}

export default About;