import React, {Component} from 'react';

export default class Card extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const {modifier, image, title, text, link, children} = this.props;
		return (
			<React.Fragment>
				<article className={`t-or-ms1-mh-card ${modifier ? modifier : ''}`}>
					<div style={{backgroundImage: `url(${image ? image : ''})`}}></div> 
					<section>
						<h3 className="t-or-ms1-mh-section-heading">{title}</h3>
						<p>{text}</p>
						<a className="t-or-ms1-mh-button" href={link}>Read More</a>
					</section>
				</article>
			</React.Fragment>
		)
	}
}