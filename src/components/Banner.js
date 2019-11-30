import React from 'react';
import stars from '../images/banner/stars.svg'
import shootingStar from '../images/banner/shooting-star.svg'
import mountains from '../images/banner/mountains.svg'
import moon from '../images/banner/moon.svg' 
import trees from '../images/banner/trees.svg'
import leaves from '../images/banner/leaves.svg'
import curve from '../images/banner/curve-top.svg'
import letter1 from '../images/banner/originalrhino/letter-01.png' 
import letter2 from '../images/banner/originalrhino/letter-02.png'
import letter3 from '../images/banner/originalrhino/letter-03.png'
import letter4 from '../images/banner/originalrhino/letter-04.png'
import letter5 from '../images/banner/originalrhino/letter-05.png'
import letter6 from '../images/banner/originalrhino/letter-06.png'
import letter7 from '../images/banner/originalrhino/letter-07.png'
import letter8 from '../images/banner/originalrhino/letter-08.png'
import letter9 from '../images/banner/originalrhino/letter-09.png'
import letter10 from '../images/banner/originalrhino/letter-010.png'
import letter11 from '../images/banner/originalrhino/letter-011.png'
import letter12 from '../images/banner/originalrhino/letter-012.png'

export default function Banner() {
	return (
		<React.Fragment>
			<div className="t-or-ms1-mh-banner">
				<div className="t-or-ms1-mh-banner-inner">
					<div className="t-or-ms1-mh-banner-stars" style={{backgroundImage: `url(${stars})`}}></div>
					<div className="t-or-ms1-mh-banner-shooting-stars">
						<span style={{backgroundImage: `url(${shootingStar})`}}></span>
						<span style={{backgroundImage: `url(${shootingStar})`}}></span> 
						<span style={{backgroundImage: `url(${shootingStar})`}}></span>
						<span style={{backgroundImage: `url(${shootingStar})`}}></span>
					</div>
					<div className="t-or-ms1-mh-banner-moon" style={{backgroundImage: `url(${moon})`}}></div>
					<div className="t-or-ms1-mh-banner-mountain">
						<img src={mountains} alt=""/>
					</div>
					<div className="t-or-ms1-mh-banner-trees">
						<img src={trees} alt=""/>
					</div> 
					<div className="t-or-ms1-mh-banner-leaves">
						<img src={leaves} alt=""/>
					</div>
					<div className="t-or-ms1-mh-banner-curve">
						<img src={curve} alt=""/>
					</div>
					<div className="t-or-ms1-mh-banner-r1">
						<h2>welcome to</h2> 
						<div className="t-or-ms1-mh-banner-logo">
							<span style={{backgroundImage: `url(${letter1})`}}></span>
							<span style={{backgroundImage: `url(${letter2})`}}></span>
							<span style={{backgroundImage: `url(${letter3})`}}></span>
							<span style={{backgroundImage: `url(${letter4})`}}></span>
							<span style={{backgroundImage: `url(${letter3})`}}></span>
							<span style={{backgroundImage: `url(${letter5})`}}></span>
							<span style={{backgroundImage: `url(${letter6})`}}></span>
							<span style={{backgroundImage: `url(${letter7})`}}></span>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<span style={{backgroundImage: `url(${letter8})`}}></span>
							<span style={{backgroundImage: `url(${letter9})`}}></span>
							<span style={{backgroundImage: `url(${letter10})`}}></span>
							<span style={{backgroundImage: `url(${letter11})`}}></span>
							<span style={{backgroundImage: `url(${letter12})`}}></span>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}