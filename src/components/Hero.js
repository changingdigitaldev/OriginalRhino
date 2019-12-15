import React from 'react';
import curve from '../images/banner/curve-top.svg'


class Hero extends React.Component {
	render() {

		let classModifier = this.props.content.classModifier ? this.props.content.classModifier : '';
		let staticImage = this.props.content.staticImage ? this.props.content.staticImage : '';

		return (
			<React.Fragment>
			<div className={`t-or-ms1-mh-hero ${classModifier}`}>
				<div className="t-or-ms1-mh-container">
					<div className="t-or-ms1-mh-hero-r1">
						<div className="t-or-ms1-mh-hero-img">
							<img src={staticImage} alt=""/>
							{this.props.content.images.map((image) => <span style={{backgroundImage: `url(${ this.props.content.images ? image : '' })`}}></span>)}
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
			</React.Fragment>
		)
	}
}

export default Hero;