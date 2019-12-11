import React from 'react';
import Quote from '../components/Quote'; 
import Hero from '../components/Hero'; 
import Record from '../components/Record'; 

// images
import bulb from '../images/hero/work/bulb.png';
import person01 from '../images/hero/work/person-01.png';
import person02 from '../images/hero/work/person-02.png';
import spark from '../images/hero/work/spark.png';
import graph01 from '../images/hero/work/graph-01.png';
import graph02 from '../images/hero/work/graph-02.png';
import stuff from '../images/hero/work/stuff.png';
import video from '../images/hero/work/video.png';
import plants from '../images/hero/work/plants.png';
import heroWork from '../images/hero/hero-work.svg';


class OurWork extends React.Component {
	render() {
		var content = {
			classModifier: 't-or-ms1-mh-hero-work',
			pageName: 'Our work',
			text: 'Take a look at some of the work we’ve done for our amazing clients.',
			staticImage: heroWork,
			images: [bulb, person01, person02, spark, '', '', graph01, graph01, graph01, video, graph02, graph02, plants]
		}
		return (
			<React.Fragment>
				<Hero content={content}/>
				<Record/>
				<Quote/>
			</React.Fragment>
		)
	}
}

export default OurWork;