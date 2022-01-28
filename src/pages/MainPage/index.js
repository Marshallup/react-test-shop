import React, { useEffect } from 'react';
import FullSlider from 'components/FullSlider';
import Products from 'components/Products';
import News from 'components/News';

export default function MainPage() {
	useEffect(() => {
		console.log('main page mount')
	})
	return (
		<>
			<section className="home-section home-fade home-full-height" id="home">
				<div className="hero-slider">
					<FullSlider/>
				</div>
			</section>
			<Products/>
			<News/>
		</>
	)
}