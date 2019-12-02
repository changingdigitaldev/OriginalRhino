import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';

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
				</Switch>
			</Router>
      <Footer/>
    </React.Fragment>
  );
}
