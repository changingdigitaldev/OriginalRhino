import React from 'react';
import Hero from '../components/Hero'; 
import OurService from '../components/OurService'; 
import OurWork from '../components/OurWork';
import Format from '../components/Format';
import Clients from '../components/Clients'; 
import Quote from '../components/Quote'; 

import graph01 from '../images/hero/services/graph-01.png';
import person01 from '../images/hero/services/person-01.png';
import person02 from '../images/hero/services/person-02.png';
import plus from '../images/hero/services/plus.png';
import plant01 from '../images/hero/services/plant-01.png';
import plant02 from '../images/hero/services/plant-02.png';
import heroservice from '../images/hero/hero-services.svg';

class Services extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		var content = {
			classModifier: 't-or-ms1-mh-hero-services',
			pageName: 'Our Services',
			text: 'We need to understand you, your audience & your goals. It all starts with a workshop.',
			staticImage: heroservice,
			images: ['', '', graph01, person01, person02, '', '', plus, plant01, plant02]
		}
	return ( 
			<React.Fragment> 
				<Hero content={content}/>
				<OurService/>
				<OurWork/>
				<Format/>
				<Clients/>
				<Quote/>
			</React.Fragment>
		)
	}
}

export default Services;
