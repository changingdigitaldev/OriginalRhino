import React from 'react';
import Hero from '../components/Hero';  
import UpcomingEvent from '../components/UpcomingEvent'; 
import Quote from '../components/Quote'; 

// images
import calendar from '../images/hero/events/calendar.png'
import clock from '../images/hero/events/clock.png'
import plant01 from '../images/hero/events/plant-01.png'
import plant02 from '../images/hero/events/plant-02.png'
import heroevent from '../images/hero/hero-events.svg'

class Event extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var content = {
			classModifier: 't-or-ms1-mh-hero-event',
			pageName: 'Events',
			text: 'We host webinars & meet ups for us and our community to share ideas.',
			staticImage: heroevent,
			images: [calendar, clock, plant01, plant02]
		}

		return (
			<React.Fragment>
				<Hero content={content}/>
				<UpcomingEvent/> 
				<Quote />
			</React.Fragment> 
		)
	}
}

export default Event;