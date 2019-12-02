import React from 'react';
import curve from '../images/banner/curve-top.svg'
import computer from '../images/hero/about/computer.png'
import idea01 from '../images/hero/about/idea-01.png'
import idea02 from '../images/hero/about/idea-02.png'
import idea03 from '../images/hero/about/idea-03.png'
import person01 from '../images/hero/about/person-01.png'
import person02 from '../images/hero/about/person-02.png'
import person03 from '../images/hero/about/person-03.png'
import plant from '../images/hero/about/plant.png'
import gear01 from '../images/hero/about/gear-01.png'
import gear02 from '../images/hero/about/gear-02.png'
import gear03 from '../images/hero/about/gear-03.png'
import heroabout from '../images/hero/hero-about.svg'


class Hero extends React.Component {
	render() {
		return (
			<div className="t-or-ms1-mh-hero t-or-ms1-mh-hero-about">
				<div className="t-or-ms1-mh-container">
					<div className="t-or-ms1-mh-hero-r1">
						<div className="t-or-ms1-mh-hero-img">
							<img src={heroabout} alt=""/>
							<span style={{backgroundImage: `url(${computer})`}}></span> 
							<span style={{backgroundImage: `url(${idea03})`}}></span> 
							<span style={{backgroundImage: `url(${person01})`}}></span> 
							<span style={{backgroundImage: `url(${person02})`}}></span> 
							<span style={{backgroundImage: `url(${person03})`}}></span> 
							<span style={{backgroundImage: `url(${idea02})`}}></span> 
							<span style={{backgroundImage: `url(${idea01})`}}></span> 
							<span style={{backgroundImage: `url(${plant})`}}></span> 
							<span><img src={gear03} alt=""/></span>
							<span><img src={gear01} alt=""/></span>
							<span><img src={gear02} alt=""/></span>
						</div>
						<section>
							<h1 className="t-or-ms1-mh-section-heading fade-up">About US</h1>
							<p className="fade-up">We’re a team of creatives with a passion for great content. Everyone has something to say. Let’s figure out the best way to say it!</p>
						</section>
					</div>
				</div>
				<div className="t-or-ms1-mh-hero-curve">
					<img src={curve} alt=""/>
				</div>
			</div>
		)
	}
}

export default Hero;