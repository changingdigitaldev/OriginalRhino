import React from 'react';
import Banner from './Banner'; 
import Platform from './Platform'; 
import Culture from './Culture'; 
import Quote from './Quote'; 
import Eyecatch from './Eyecatch'; 
import Clients from './Clients'; 

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