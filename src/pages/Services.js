import React from 'react';
import Hero from '../components/Hero'; 
import OurService from '../components/OurService'; 
import OurWork from '../components/OurWork';
import Format from '../components/Format';
import Clients from '../components/Clients'; 
import Quote from '../components/Quote'; 


export default function Home() {
	return ( 
		<React.Fragment> 
			<Hero/>
			<OurService/>
			<OurWork/>
			<Format/>
			<Clients/>
			<Quote/>
		</React.Fragment>
	)
}