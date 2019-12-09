import React from 'react';
import curve from '../images/banner/curve-top.svg'


class Hero extends React.Component {
	render() {
		return (
			<div className={`t-or-ms1-mh-hero ${this.props.content.classModifier}`}>
				<div className="t-or-ms1-mh-container">
					<div className="t-or-ms1-mh-hero-r1">
						<div className="t-or-ms1-mh-hero-img">
							<img src={this.props.content.staticImage} alt=""/>
							{this.props.content.images.map((image) => <span style={{backgroundImage: `url(${image})`}}></span>)}
						</div>
						<section>
							<h1 className="t-or-ms1-mh-section-heading fade-up">{this.props.content.pageName}</h1>
							<p className="fade-up">{this.props.content.text}</p>
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