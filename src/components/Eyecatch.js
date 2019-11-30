import React from 'react';
import collab from '../images/collab.svg'

export default function Eyecatch() {
	return (
		<React.Fragment>
			<div className="t-or-ms1-mh-eyecatch fadein">
				<div className="t-or-ms1-mh-container">
					<div className="t-or-ms1-mh-eyecatch-r1">
						<h2>Helping you create <br/>
						<span>supercharged content<span>,</span></span> fast. <br/>
						We nail:</h2>
					</div>
					<div className="t-or-ms1-mh-eyecatch-r2">
						<ul>
							<li>Articles</li>
							<li>Documents</li>
							<li>infographics</li>
							<li>Slides</li>
						</ul>
						<ul>
							<li>gifs</li>
							<li>podcasts</li>
							<li>videos</li>
						</ul>
						<img src={collab} alt=""/>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}