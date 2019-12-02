import React from 'react';
import Banner from '../components/Banner'; 
import Platform from '../components/Platform'; 
import Culture from '../components/Culture'; 
import Quote from '../components/Quote'; 
import Eyecatch from '../components/Eyecatch'; 
import Clients from '../components/Clients'; 

export default function Home() {
	return (
		<React.Fragment> 
			<Banner/>
			<Eyecatch/>
			<Culture/>
			<Platform/>
			<Clients/>
			<Quote/>
		</React.Fragment>
	)
}