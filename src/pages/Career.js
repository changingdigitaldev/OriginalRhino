import React from 'react';
import Hero from '../components/Hero'; 
import Offer from '../components/Offer'; 
import Popular from '../components/Popular'; 
import Values from '../components/Values'; 

// images
import table from '../images/hero/careers/table.png';
import person01 from '../images/hero/careers/person-01.png';
import person02 from '../images/hero/careers/person-02.png';
import person03 from '../images/hero/careers/person-03.png';
import person04 from '../images/hero/careers/person-04.png';
import materials from '../images/hero/careers/materials.png';
import plant01 from '../images/hero/careers/plant-01.png';
import plant02 from '../images/hero/careers/plant-02.png';
import herocareer from '../images/hero/hero-careers.svg';


class Career extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var content = {
			classModifier: 't-or-ms1-mh-hero-careers',
			pageName: 'Join Us',
			text: 'We\'re growing fast. Help us meet our mission to supercharge client content.',
			staticImage: herocareer,
			images: [table, person01, person02, person03, person04, materials, plant01, plant01]
		}
		return (
			<React.Fragment>
				<Hero content={content} />
				<Values/>
				<Offer/>
				<Popular/>
			</React.Fragment>
		)
	}
}	

export default Career;