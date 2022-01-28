import React from 'react';

export default function News() {
	const news = [
		'Receipt of the new collection',
		'Sale of summer season',
		'New lookbook',
		'Receipt of the new collection',
		'Sale of summer season',
		'New lookbook',
	];
	const newsItem = news.map((item, idx) => (
		<div key={item + idx} className="col-sm-6 col-md-4 col-lg-4">
			<div className="post mb-40">
				<div className="post-header font-alt">
					<h2 className="post-title">
						<a href="#" className="text-underline-hover">{ item }</a>
					</h2>
				</div>
				<div className="post-entry">
					<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring
						which I enjoy with my whole heart.</p>
				</div>
				<div className="post-more">
					<a className="more-link text-underline-hover" href="#">Read more</a>
				</div>
			</div>
		</div>
	));

	return (
		<section className="module" id="news">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-sm-6">
						<h2 className="module-title font-alt">Our News</h2>
					</div>
				</div>
				<div className="row multi-columns-row post-columns wo-border">
					{ newsItem }
				</div>
			</div>
		</section>
	);
}