import React from 'react';
import SingleProductModule from 'components/SingleProductModule';
import Products from 'components/Products';

export default function SingleProductPage() {
	return (
		<>
			<SingleProductModule/>
			<hr className="divider-w"/>
			<Products title={'Сопутствующие товары'}/>
		</>
	)
}