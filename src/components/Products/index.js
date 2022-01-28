import React from 'react';

export default function Products({ title = 'Новинки в одежде' }) {
	const productItems = ['product-7.jpg', 'product-8.jpg', 'product-9.jpg', 'product-10.jpg', 'product-11.jpg', 'product-12.jpg', 'product-13.jpg', 'product-14.jpg',];
	const productItem = productItems.map((product, idx) => (
		<div key={product + idx} className="col-sm-6 col-md-3 col-lg-3">
			<div className="shop-item">
				<div className="shop-item-image">
					<img src={require("images/shop/" + product)} alt="Accessories Pack"/>
					<div className="shop-item-detail">
						<a className="btn btn-round btn-b">
						<span className="icon-basket">
							<i style={{marginRight: '5px',}} className="fas fa-shopping-basket"></i>
							Add To Cart
						</span>
					</a>
					</div>
				</div>
				<h4 className="shop-item-title font-alt">
					<a href="#">Accessories Pack</a>
				</h4>£9.00
			</div>
		</div>
	));

	return (
		<section className="module-small">
			<div className="container">
				<div className="row justify-content-sm-center">
					<div className="col-sm-6">
						<h2 className="module-title font-alt">{ title }</h2>
					</div>
				</div>
				<div className="row multi-columns-row">
					{ productItem }
				</div>
				<div className="row mt-30">
					<div className="col-sm-12 align-center">
						<a className="btn btn-b btn-round" href="#">
							See all products
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}