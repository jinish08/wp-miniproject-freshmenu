import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageCard } from './';

const MultiCarousel = () => {
	function NextArrow(props) {
		const { className, onClick } = props;
		return (
			<div className={className} onClick={onClick}>
				<i
					class="fas fa-chevron-right"
					style={{ color: 'rgb(168, 165, 165)', fontSize: '3rem' }}
				></i>
			</div>
		);
	}

	function PrevArrow(props) {
		const { className, onClick } = props;
		return (
			<div className={className} onClick={onClick}>
				<i
					class="fas fa-chevron-left"
					style={{ color: 'rgb(168, 165, 165)', fontSize: '3rem' }}
				></i>
			</div>
		);
	}

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="multiContainer mb-5 mx-auto">
			<Slider {...settings}>
				<ImageCard img="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/b9614c0c-d544-4b09-b5a8-d8bea51fb0bb.jpg" />
				<ImageCard img="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/68753c88-9789-4ce0-af29-b8d3384e54b1.jpg" />
				<ImageCard img="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/0dddf387-f47d-4f3c-aff1-96ac7243f3c7.jpg" />
				<ImageCard img="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/9ba38d75-0850-4f76-bd32-126b83b40448.jpg" />
				<ImageCard img="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/f34f4367-a269-4daa-85a9-140577b1aef4.jpeg" />
			</Slider>
		</div>
	);
};

export default MultiCarousel;
