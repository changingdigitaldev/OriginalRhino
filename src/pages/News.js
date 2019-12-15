import React from 'react';
import Hero from '../components/Hero';  
import Card from '../components/Card';
import Quote from '../components/Quote'; 
import Copywriting from '../components/Copywriting'; 

import img01 from '../images/news/news-img01.jpg'
import img02 from '../images/news/news-img02.jpg'
import img03 from '../images/news/news-img03.jpg'
import img04 from '../images/news/news-img04.jpg'
import newspaper from '../images/news/newspaper.jpg'
import ipad from '../images/hero/news/ipad.png'
import news from '../images/hero/news/news.png'
import person1 from '../images/hero/news/person-01.png'
import person2 from '../images/hero/news/person-02.png'
import person3 from '../images/hero/news/person-03.png'
import illustration1 from '../images/hero/news/illustration-01.png'
import illustration2 from '../images/hero/news/illustration-02.png'
import illustration3 from '../images/hero/news/illustration-03.png'
import plants from '../images/hero/news/plants.png'
import heronews from '../images/hero/hero-news.svg'

export default class News extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var content = {
			classModifier: 't-or-ms1-mh-hero-news',
			pageName: 'News & Insights',
			text: 'We want to entertain, educate, and inspire you with content of our own.',
			staticImage: heronews,
			images: [ipad, news, person2, person3, person1, illustration1, illustration3, illustration2, plants]
		}
		return (
			<React.Fragment>
				<Hero content={content}/>
				<div className="t-or-ms1-mh-latest-news">
					<div className="t-or-ms1-mh-container">
						<div className="t-or-ms1-mh-latest-news-r1 fadein">
							<h2 className="t-or-ms1-mh-section-heading">Latest</h2>
							<p>We care about great content and we want to push your thinking and inspire you
							with the people, technology and emerging practices that make the always-
							changing world of content so intriguing.</p>
						</div>
						<div className="t-or-ms1-mh-search t-or-ms1-mh-search-latest fadein">
							<ul>
								<li>All</li>
								<li>articles</li>
								<li>guides</li>
							</ul>
							<div>
								<fieldset>
									<input type="text" placeholder="Search"/>
									<button></button>
								</fieldset>
								<p>Sort by: <span>Most Recent</span></p>
							</div>
						</div>
						<div className="t-or-ms1-mh-latest-news-r2 fadein">
							<ul>
								<li>
									<Card 
										modifier="t-or-ms1-mh-card-latest-news"
										image={img01}
										title="Vivamus Pellentesque Nibh Lacus, Et Mattis Eros Pharetra Eu. Nulla Placerat Rhoncus" 
										text="Duis non elementum tellus, sit amet suscipit leo. Aenean vehicula scelerisque orci vel laoreet. Nullam vel vulputate sem. Ut a ligula at felis facilisis cursus."
										link=""
									/>
								</li>
								<li>
									<Card 
										modifier="t-or-ms1-mh-card-latest-news"
										image={img02}
										title="Mauris Imperdiet Velit Auctor Sed Egestas" 
										text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."
										link=""
									/>
								</li>
							</ul>
						</div>
						<div className="t-or-ms1-mh-latest-news-r3 fadein">
							<ul>
								<li>
									<Card 
										modifier="t-or-ms1-mh-card-latest-news"
										image={img03}
										title="Phasellus Ultricies Lacus Nec Orci Varius" 
										text="Phasellus ultricies lacus nec orci varius gravida. Suspendisse potenti vel."
										link=""
									/>
								</li>
								<li>
									<Card 
										modifier="t-or-ms1-mh-card-latest-news"
										image={img04}
										title="Aenean In Est In Risus Finibus Dignissim Eget" 
										text="Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."
										link=""
									/>
								</li>
								<li>
									<div className="t-or-ms1-mh-sales-presentation t-or-ms1-mh-sales-presentation-latest">
										<h3 className="t-or-ms1-mh-section-heading">Creating The Perfect Sales Presentation</h3>
										<img src={newspaper} alt="newspaper"/>
										<p>Praesent molestie, est aliquet porta sodales, dolor metus ullamcorper purus, quis auctor sapien ante auctor mauris gravida mauris quis</p>
										<a className="t-or-ms1-mh-button" href="">More Info</a>
									</div>
								</li>
							</ul>

							<a className="t-or-ms1-mh-button" href="">load more</a>
						</div>
					</div>
				</div>

				<Copywriting/>

				<div className="t-or-ms1-mh-most-popular">
					<div className="t-or-ms1-mh-container">
						<div className="t-or-ms1-mh-most-popular-r1">
							<h2 className="t-or-ms1-mh-section-heading">Most Popular</h2>
							<a href="" className="t-or-ms1-mh-button">View All</a>
						</div>
						<div className="t-or-ms1-mh-most-popular-r2">
							<ul>
								<li>
									<Card 
										modifier="t-or-ms1-mh-card-latest-news"
										image={img04}
										title="Lorem Ipsum Dolor Sit Amet, Consetetur" 
										text="Phasellus ultricies lacus nec orci varius gravida. Suspendisse potenti vel justo tellus."
										link=""
									/>
								</li>
								<li>
									<Card 
										modifier="t-or-ms1-mh-card-latest-news"
										image={img02}
										title="Morbi Posuere Semper Lorem, Eu Vestibulum" 
										text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."
										link=""
									/>
								</li>
								<li>
									<Card 
										modifier="t-or-ms1-mh-card-latest-news"
										image={img03}
										title="Phasellus Ultricies Lacus Nec Orci Varius" 
										text="Phasellus ultricies lacus nec orci varius gravida. Suspendisse potenti vel."
										link=""
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<Quote modifier="t-or-ms1-mh-quote-alt"/>
			</React.Fragment>
		)
	}
}