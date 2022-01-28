import React from 'react';
import TabPanel from 'components/UI/TabPanel';

export default function SingleProductModule() {
	return (
		<section className="module">
			<div className="container">
				<div className="row">
					<div className="col-sm-6 mb-sm-40">
						<a className="gallery" href="assets/images/shop/product-7.jpg">
							<img
								src={require('assets/images/shop/product-7.jpg')} alt="Single Product Image"
							/>
						</a>
						<ul className="product-gallery">
							<li>
								<a className="gallery" href="assets/images/shop/product-8.jpg"></a>
								<img
									src={require('assets/images/shop/product-8.jpg')} alt="Single Product"
								/>
							</li>
							<li>
								<a className="gallery" href="assets/images/shop/product-9.jpg"></a>
								<img
									src={require("assets/images/shop/product-9.jpg")} alt="Single Product"
								/>
							</li>
							<li>
								<a className="gallery" href="assets/images/shop/product-10.jpg"></a>
								<img
									src={require('assets/images/shop/product-10.jpg')} alt="Single Product"
								/>
							</li>
						</ul>
					</div>
					<div className="col-sm-6">
						<div className="row">
							<div className="col-sm-12">
								<h1 className="product-title font-alt">Accessories Pack</h1>
							</div>
						</div>
						<div className="row mb-20">
							<div className="col-sm-12">
								<span><i className="fa fa-star star"></i></span>
								<span><i
									className="fa fa-star star"
								></i></span>
								<span><i className="fa fa-star star"></i></span>
								<span><i
									className="fa fa-star star"
								></i></span>
								<span><i className="fa fa-star star-off"></i></span>
								<a
									className="open-tab section-scroll" href="#reviews"
								>-2customer reviews
								</a>
							</div>
						</div>
						<div className="row mb-20">
							<div className="col-sm-12">
								<div className="price font-alt">
									<span className="amount">£20.00</span>
								</div>
							</div>
						</div>
						<div className="row mb-20">
							<div className="col-sm-12">
								<div className="description">
									<p>The European languages are members of the same family. Their separate existence is a myth. For
										science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their
										grammar, their pronunciation and their most common words.</p>
								</div>
							</div>
						</div>
						<div className="row mb-20">
							<div className="col-sm-4 mb-sm-20">
								<input
									className="form-control input-lg" type="number" name="" defaultValue="1" max="40" min="1"
									required="required"
								/>
							</div>
							<div className="col-sm-8">
								<a className="btn btn-lg btn-block btn-round btn-b" href="#">Add To Cart</a>
							</div>
						</div>
						<div className="row mb-20">
							<div className="col-sm-12">
								<div className="product_meta">Categories:
									<a href="#"> Man,</a>
									<a href="#">Clothing,</a>
									<a
										href="#"
									>T-shirts
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<TabPanel className={'mt-70'} />
			</div>
		</section>
	)
}