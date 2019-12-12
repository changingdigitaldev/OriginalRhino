import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Career from './pages/Career'; 
import OurWork from './pages/OurWork'; 
import Event from './pages/Event'; 

import Header from './components/Header';
import Footer from './components/Footer';

export default function App() { 
  return (
    <React.Fragment> 
      <Header/>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/services" component={Services} /> 
					<Route exact path="/career" component={Career} /> 
					<Route exact path="/our-work" component={OurWork} /> 
					<Route exact path="/event" component={Event} /> 
				</Switch>
			</Router>
      <Footer/>
    </React.Fragment>
  );
}
