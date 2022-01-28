import React from 'react';
import { EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function FullSlider() {
	const images = ['slider1.png', 'slider3.png'];
	const slides = images.map((img, idx) => (
		<SwiperSlide
			key={img + idx}
			className={'bg-dark-30 bg-dark shop-page-header'}
			style={{ backgroundImage: `url('${require('images/shop/' + img)}')` }}
		>
			<div className="titan-caption">
				<div className="caption-content">
					<div className="font-alt mb-30 titan-title-size-1">This is Titan</div>
					<div className="font-alt mb-30 titan-title-size-4"> Summer 2017</div>
					<div className="font-alt mb-40 titan-title-size-1">Your online fashion destination</div>
					<a className="section-scroll btn btn-border-w btn-round" href="#latest">Learn More</a>
				</div>
			</div>
		</SwiperSlide>
	));
	return (
		<Swiper
			modules={[EffectFade, Autoplay]}
			autoplay={{delay: 1000}}
			effect={'fade'}
			speed={700}
			loop={true}
			fadeEffect={{ crossFade: true }}
			className={'slides'}
			spaceBetween={0}
			slidesPerView={1}
			onSlideChange={() => console.log('swiper slide change')}
			onSwiper={(swiper) => console.log(swiper, 'onSwiper Event')}
		>
			{ slides }
		</Swiper>
	)
}