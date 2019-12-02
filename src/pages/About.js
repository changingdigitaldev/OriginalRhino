import React from 'react';
import AboutContent from '../components/AboutContent'; 
import AboutLearn from '../components/AboutLearn'; 
import Hero from '../components/Hero'; 
import Quote from '../components/Quote'; 

class About extends React.Component {
	render() {
		return (
			<React.Fragment> 
				<Hero/>
				<AboutContent/>
				<AboutLearn/>
				<Quote/>
			</React.Fragment>
		)
	}
}

export default About;