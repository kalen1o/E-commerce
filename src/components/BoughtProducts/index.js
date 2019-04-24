import React, { Component } from 'react';
import './style.css';
import Slider from "react-slick";
import { connect } from 'react-redux';
import {allItems} from '../constants';
import {productImages} from '../../images';
import { getBoughtProducts } from '../../store/actions';

const SliderElem = (props) => {
	return (
		<div className="item-wrapper">
			<img src={productImages[allItems[props.index]].img} alt={allItems[props.index]}/>
			<p className="bought-title">{productImages[allItems[props.index]].title}</p>
		</div>
	)
}

class BoughtProducts extends Component {
	componentDidMount() {
		if(this.props.profile) {
			let profileInfo = JSON.parse(localStorage.getItem(this.props.profile))
			const { getBoughtProducts } = this.props;
			getBoughtProducts(profileInfo.boughtProducts)
		}
	}
	render() {
		const {boughtProducts} = this.props;
		let slidesToShow = 3;
		if (boughtProducts.length === 1) slidesToShow = 1
		if (boughtProducts.length === 2) slidesToShow = 2
		if (!boughtProducts.length) {
			return (
				<>
					<h3>Purchases</h3>
					<div className="item-wrapper">You have no purchases.</div>
				</>
			)
		}
		const settings = {
			dots: true,
			className: "center",
			centerMode: true,
			infinite: true,
			centerPadding: "60px",
			slidesToShow: slidesToShow,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			pauseOnHover: true
		}
		return (
			<>
			<h3>Purchases</h3>
				<Slider {...settings}>
					{boughtProducts.map(item => <SliderElem key={item} index={item}/>)}
				</Slider>
			</>
		)
	}
}

export default connect(store => ({profile: store.profile, boughtProducts: store.boughtProducts}), {getBoughtProducts})(BoughtProducts)